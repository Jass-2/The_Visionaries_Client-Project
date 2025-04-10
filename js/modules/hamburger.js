
/**
 * Sets up the mobile menu functionality
 */
export function setupMobileMenu() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileCloseButton = document.querySelector('.mobile-close-button');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const body = document.body;

  function openMobileMenu() {
    if (mobileMenuButton && mobileMenuOverlay) {
      // First make it display block so animations can work
      mobileMenuOverlay.style.display = 'block';
      
      // Force a reflow before adding the active class to ensure the animation works
      void mobileMenuOverlay.offsetWidth;
      
      // Then add active class which triggers the animations
      mobileMenuOverlay.classList.add('active');
      
      // Add active class to hamburger button for animation
      mobileMenuButton.classList.add('active');
      
      body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
  }

  function closeMobileMenu() {
    if (mobileMenuButton && mobileMenuOverlay) {
      // First remove active class to start the animation
      mobileMenuOverlay.classList.remove('active');
      
      // Remove active class from hamburger button
      mobileMenuButton.classList.remove('active');
      
      // After animation completes, hide the menu entirely
      setTimeout(() => {
        if (!mobileMenuOverlay.classList.contains('active')) {
          mobileMenuOverlay.style.display = '';
        }
      }, 450); // Match this timing with the CSS transition duration
      
      body.style.overflow = ''; // Restore scrolling
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

  // Add active class to current page link
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });
}