function generateRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let randomColor = "rgb(" + r + "," + g + "," + b + ")";
  return randomColor;
}

document.getElementById("colorBtn").addEventListener("click", function () {
  let newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById("colorDisplay").textContent = "Color is: " + newColor;
});
