export function setupMobileMenu() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileCloseButton = document.querySelector('.mobile-close-button');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

  function openMobileMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
  }

  function closeMobileMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', openMobileMenu);
  }

  if (mobileCloseButton) {
    mobileCloseButton.addEventListener('click', closeMobileMenu);
  }

  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  if (mobileNavLinks.length > 0) {
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
}
