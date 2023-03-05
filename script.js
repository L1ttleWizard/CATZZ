// выбираем навбар
const navbar = document.querySelector('.navbar');

// добавляем обработчик событий на скролл страницы
window.addEventListener('scroll', () => {
  // получаем текущее положение скролла
  const scrollPosition = window.scrollY;

  // если скролл больше или равен 150 пикселей, меняем фон навбара на белый
  if (scrollPosition >= 150) {
    navbar.style.backgroundColor = 'white !important';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});