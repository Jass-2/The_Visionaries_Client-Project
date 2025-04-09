export function logoAnimation() {
  const logo = document.querySelector('.header .logo img');
  let scrolled = false; // Flag to track whether the logo has switched

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !scrolled) {
      // Switch to the second logo only once when scrolling down
      scrolled = true;
      logo.classList.add('hidden');

      setTimeout(() => {
        logo.src = 'images/logo.svg';
        logo.style.transform = 'scale(1.1)'; // Apply scale transformation
        logo.classList.remove('hidden');
      }, 300);

    } else if (window.scrollY === 0 && scrolled) {
      // Switch back to the first logo when scrolling to the top
      scrolled = false;
      logo.classList.add('hidden');

      setTimeout(() => {
        logo.src = 'images/Full-Logo.svg';
        logo.style.transform = 'scale(1)'; // Reset scale transformation
        logo.classList.remove('hidden');
      }, 300);
    }
  });
}