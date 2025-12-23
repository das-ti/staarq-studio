let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const slidesContainer = document.getElementById("carouselSlides");
const indicatorsContainer = document.getElementById("indicators");
const totalSlides = slides.length;

// Definir o primeiro slide como ativo
slides[0].classList.add("active");

// Criar indicadores
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement("div");
  indicator.className = "indicator";
  if (i === 0) indicator.classList.add("active");
  indicator.onclick = () => goToSlide(i);
  indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll(".indicator");

function updateCarousel() {
  // Remove active de todos os slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // Adiciona active ao slide atual
  slides[currentSlide].classList.add("active");

  // Atualiza indicadores
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Auto-play (opcional)
let autoPlay = setInterval(() => moveSlide(1), 6000);

// Pausar auto-play ao passar o mouse
const container = document.querySelector(".carousel-container");
container.addEventListener("mouseenter", () => clearInterval(autoPlay));
container.addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => moveSlide(1), 6000);
});

// Suporte para toque em dispositivos móveis
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

container.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchStartX - touchEndX > 50) {
    moveSlide(1);
  } else if (touchEndX - touchStartX > 50) {
    moveSlide(-1);
  }
}
