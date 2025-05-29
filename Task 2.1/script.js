function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${r},${g},${b})`;
  return randomColor;
}

document.getElementById("colorBtn").addEventListener("click", function () {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  document.getElementById(
    "colorDisplay"
  ).textContent = `Color is:  ${newColor}`;
});
