document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filterBtn");
  const animals = document.querySelectorAll(".animal");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = button.getAttribute("data-filter");
      animals.forEach((animal) => {
        if (
          animal.getAttribute("data-type") === filterValue ||
          filterValue === "All"
        ) {
          animal.classList.remove("hidden");
        } else {
          animal.classList.add("hidden");
        }
      });
    });
  });
});
