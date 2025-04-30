const slides = document.querySelectorAll('.slide');
 const dots = document.querySelectorAll('.dot');
 const nextBtn = document.querySelector('.next');
 const prevBtn = document.querySelector('.prev');
 let index = 0;


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

    setInterval(nextSlide, 7000);
  
  
    if (idx === i) {
        slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
   
    function showSlide(i) {
      slides.forEach((slide, idx) => {
        if (idx === i) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
   
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === i);
      });
    }