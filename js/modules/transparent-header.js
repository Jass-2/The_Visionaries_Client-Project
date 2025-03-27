
/**
 * Sets up the transparent header functionality on scroll
 */
export function setupTransparentHeader() {
    const pageContainer = document.querySelector('#pageContainer');
    const heroSection = document.querySelector('#heroSection');
    
    if (pageContainer && heroSection) {
      function checkScroll() {
        const heroHeight = heroSection.offsetHeight;
        
        if (window.scrollY > heroHeight - 745) {
          pageContainer.classList.remove('transparent-header');
        } else {
          pageContainer.classList.add('transparent-header');
        }
      }
      
      // Check scroll position on page load
      checkScroll();
      
      // Check scroll position on scroll
      window.addEventListener('scroll', checkScroll);
    }
  }