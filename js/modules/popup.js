
/**
 * Creates and manages a popup that can be shown and hidden
 */
export function createPopup(content, className = '') {
    // Create popup container
    const popup = document.createElement('div');
    popup.className = `popup-overlay ${className}`;
    
    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupContent.innerHTML = content;
    
    // Add content to popup
    popup.appendChild(popupContent);
    
    // Add popup to body
    document.body.appendChild(popup);
    
    // Hide popup when clicking outside content
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        hidePopup();
      }
    });
    
    // Function to show popup
    function showPopup() {
      popup.classList.add('active');
    }
    
    // Function to hide popup
    function hidePopup() {
      popup.classList.remove('active');
      // Remove popup after animation completes
      setTimeout(() => {
        if (document.body.contains(popup)) {
          document.body.removeChild(popup);
        }
      }, 300);
    }
    
    return {
      show: showPopup,
      hide: hidePopup
    };
  }