const words = ["cybersecurity analyst", "foss fanatic ", "arch aficionado", "checkout my projects below", "security isn’t optional", "monitoring...", "detecting...", "responding!"];
const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 120;
const deletingSpeed = 80;
const delayBetweenWords = 1000;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = "# " + currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, delayBetweenWords);
        }
    } else {
        typingElement.textContent = "# " + currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentX = 0;

function getMaxTranslate() {
  const carouselWidth = carousel.scrollWidth;
  const containerWidth = container.clientWidth;
  return carouselWidth - containerWidth;
}

function updateButtons() {
  prevBtn.disabled = currentX <= 0;
  nextBtn.disabled = currentX >= getMaxTranslate();

  prevBtn.style.opacity = prevBtn.disabled ? "0.3" : "0.7";
  nextBtn.style.opacity = nextBtn.disabled ? "0.3" : "0.7";
}

nextBtn.addEventListener('click', () => {
  const step = carousel.children[0].offsetWidth + 20; // card + margin
  currentX = Math.min(currentX + step, getMaxTranslate());
  carousel.style.transform = `translateX(${-currentX}px)`;
  updateButtons();
});

prevBtn.addEventListener('click', () => {
  const step = carousel.children[0].offsetWidth + 20;
  currentX = Math.max(currentX - step, 0);
  carousel.style.transform = `translateX(${-currentX}px)`;
  updateButtons();
});

window.addEventListener('resize', () => {
  currentX = Math.min(currentX, getMaxTranslate());
  carousel.style.transform = `translateX(${-currentX}px)`;
  updateButtons();
});


updateButtons();
typeEffect();