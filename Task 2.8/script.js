document.addEventListener("DOMContentLoaded", () => {
  // Завантажуємо продукті через fetch
  fetch("Products.json")
    .then(response => response.json())  // Перетворюємо відповідь на JSON
    .then(data => {
      products = data;  // Зберігаємо отримані продукти
      loadProducts();    // Викликаємо функцію для відображення товарів
    })
    .catch(error => {
      console.error("Error loading products:", error);  // Виводимо помилку в консоль, якщо щось пішло не так
    });

  document.getElementById("categoryFilter").addEventListener("change", (event) => {
    selectedCategory = event.target.value;
    filterProducts();
  });

  document.getElementById("searchInput").addEventListener("input", (event) => {
    searchQuery = event.target.value;
    filterProducts();
  });
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedCategory = "";
let searchQuery = "";

var products = Require('Products.json')
function loadProducts() {
  renderProducts(products);
}

function filterProducts() {
  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  renderProducts(filteredProducts);
}

function renderProducts(productsToRender) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  productsToRender.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>$${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    productList.append(productElement);
  });


  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.getAttribute("data-id"));
      addToCart(productId);
    });
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    const cartItemElement = document.createElement("li");
    cartItemElement.innerHTML = `
      ${item.name} - $${item.price}
      <button class="remove-from-cart" data-id="${item.id}">Remove</button>
    `;
    cartItems.append(cartItemElement);
    totalPrice += item.price;
  });

  document.getElementById("totalPrice").textContent = `Total: $${totalPrice.toFixed(2)}`;


  const removeButtons = document.querySelectorAll(".remove-from-cart");
  removeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const productId = parseInt(event.target.getAttribute("data-id"));
      removeFromCart(productId);
    });
  });
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
