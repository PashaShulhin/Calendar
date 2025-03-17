let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let selectedCategory = "";
let searchQuery = "";
async function loadProducts() {
  try {
    const response = await fetch("Products.json");
    products = await response.json();
    renderProducts(products);
    renderCart();
  } catch (error) {
    console.error("Error loading products:", error);
  }
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
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.append(productElement);
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
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItems.append(cartItemElement);
    totalPrice += item.price;
  });

  document.getElementById("totalPrice").textContent = `Total: $${totalPrice.toFixed(2)}`;
}


function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}


document.getElementById("categoryFilter").addEventListener("change", (event) => {
  selectedCategory = event.target.value;
  filterProducts();
});


document.getElementById("searchInput").addEventListener("input", (event) => {
  searchQuery = event.target.value;
  filterProducts();
});


loadProducts();
