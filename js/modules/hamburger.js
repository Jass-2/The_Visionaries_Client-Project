
/**
 * Sets up the mobile menu functionality
 */
export function setupMobileMenu() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileCloseButton = document.querySelector('.mobile-close-button');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const body = document.body;
  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

  function openMobileMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.add('active');
      body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
  }

  function closeMobileMenu() {
    if (mobileMenuOverlay) {
      mobileMenuOverlay.classList.remove('active');
      body.style.overflow = ''; // Restore scrolling
    }
  }

  // Set up event listeners
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', openMobileMenu);
  }

  if (mobileCloseButton) {
    mobileCloseButton.addEventListener('click', closeMobileMenu);
  }

  // Close menu when clicking on mobile nav links
  if (mobileNavLinks.length > 0) {
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  // Add active class to current page link
  highlightCurrentPage();
}

/**
 * Highlights the current page in the navigation
 */
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // Check if this link matches the current page
    if ((linkHref === currentPage) || 
        (currentPage === '' && linkHref === 'index.html') || 
        (linkHref && currentPage && linkHref.includes(currentPage))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}