document.addEventListener('DOMContentLoaded', () => {
  const filters = {
    color: document.getElementById('color'),
    size: document.getElementById('size'),
    gender: document.getElementById('gender'),
  };

  const products = document.querySelectorAll('.product');

  function filterProducts() {
    const selectedColor = filters.color.value;
    const selectedSize = filters.size.value;
    const selectedGender = filters.gender.value;

    products.forEach((product) => {
      const productColor = product.dataset.color;
      const productSize = product.dataset.size;
      const productGender = product.dataset.gender;

      const colorMatch = !selectedColor || productColor === selectedColor;
      const sizeMatch = !selectedSize || productSize === selectedSize;
      const genderMatch = !selectedGender || productGender === selectedGender;

      if (colorMatch && sizeMatch && genderMatch) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  }

  filters.color.addEventListener('change', filterProducts);
  filters.size.addEventListener('change', filterProducts);
  filters.gender.addEventListener('change', filterProducts);
});
