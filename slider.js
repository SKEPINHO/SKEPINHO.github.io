const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
    dots[idx].classList.toggle('active', idx === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    index = Number(dot.dataset.index);
    showSlide(index);
  });
});

setInterval(nextSlide, 5000);

if (idx === i) {
    slide.classList.add('active');
  } else {
    slide.classList.remove('active');
  }
  