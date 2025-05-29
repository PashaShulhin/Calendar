document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById("onNext");
  const prevButton = document.getElementById("onPrev");

  const slides = document.querySelectorAll(".slide");
  let activeIndex = 0;

  const changeSlide = (direction) => {
    slides[activeIndex].removeAttribute("data-active");
    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[activeIndex].setAttribute("data-active", "");
  };

  nextButton.addEventListener("click", () => {
    changeSlide(1);
  });

  prevButton.addEventListener("click", () => {
    changeSlide(-1);
  });
});
