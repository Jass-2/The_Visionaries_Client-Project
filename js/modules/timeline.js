
/**
 * Sets up the Timeline slider functionality
 * with drag and autoplay features
 */
export function setupTimelineSlider() {
  const slider = document.querySelector('.timeline-slider');
  const prevBtn = document.querySelector('.timeline-prev-btn');
  const nextBtn = document.querySelector('.timeline-next-btn');
  const autoPlayBtn = document.querySelector('.timeline-auto-play-btn');
  const progressFill = document.querySelector('.timeline-progress-fill');
  const paginationDots = document.querySelectorAll('.timeline-pagination-dot');
  
  // Return early if slider or buttons don't exist
  if (!slider || !prevBtn || !nextBtn || !autoPlayBtn || !progressFill) return;
  
  const cards = slider.querySelectorAll('.timeline-card');
  const cardWidth = cards[0]?.offsetWidth + 16; // card width + gap
  let autoPlayInterval = null;
  let isAutoPlaying = false;
  
  // Mouse drag variables
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let lastPageX = 0; // Track the last position for velocity-based movement
  let velocity = 0;
  let rafId = null; // For requestAnimationFrame

  // Function to update pagination dots based on scroll position
  const updatePaginationDots = () => {
    if (!paginationDots.length) return;
    
    const scrollPercentage = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
    const dotIndex = Math.min(
      Math.floor(scrollPercentage * paginationDots.length),
      paginationDots.length - 1
    );
    
    paginationDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === dotIndex);
    });
  };

  // Function to update progress bar fill
  const updateProgressBar = () => {
    const scrollPercentage = slider.scrollLeft / (slider.scrollWidth - slider.clientWidth);
    progressFill.style.width = `${scrollPercentage * 100}%`;
  };

  // Function to scroll to next card
  const scrollNext = () => {
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    
    // If we're at the end, scroll back to start
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - cardWidth) {
      setTimeout(() => {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      }, 500);
    }
    
    setTimeout(() => {
      updatePaginationDots();
      updateProgressBar();
    }, 400); // Update after scroll completes
  };

  // Function to scroll to previous card
  const scrollPrev = () => {
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    
    // If we're at the beginning, scroll to end
    if (slider.scrollLeft <= cardWidth) {
      setTimeout(() => {
        slider.scrollTo({ left: slider.scrollWidth - slider.clientWidth, behavior: 'smooth' });
      }, 500);
    }
    
    setTimeout(() => {
      updatePaginationDots();
      updateProgressBar();
    }, 500); // Update after scroll completes
  };

  // Function to toggle autoplay
  const toggleAutoPlay = () => {
    // Always clear any existing interval first to prevent multiple intervals
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
    
    // Toggle the state
    isAutoPlaying = !isAutoPlaying;
    
    if (isAutoPlaying) {
      autoPlayBtn.textContent = 'Stop';
      autoPlayBtn.classList.add('playing');
      autoPlayInterval = setInterval(scrollNext, 3000);
    } else {
      autoPlayBtn.textContent = 'Auto play >';
      autoPlayBtn.classList.remove('playing');
      // No need to clear interval here, already done above
    }
  };

  // Mouse drag event handlers with improved physics
  const startDrag = (e) => {
    isDragging = true;
    slider.classList.add('dragging');
    
    // Cancel any ongoing animation
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    
    // Determine if it's a mouse or touch event
    const pageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
    startX = pageX;
    lastPageX = pageX;
    scrollLeft = slider.scrollLeft;
    velocity = 0;
    
    // Stop autoplay when user starts dragging
    if (isAutoPlaying) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
    
    // Prevent default to avoid text selection during drag
    if (e.type !== 'touchstart') {
      e.preventDefault();
    }
  };

  const doDrag = (e) => {
    if (!isDragging) return;
    
    // Don't prevent default for touch events to allow natural scrolling on mobile
    if (e.type !== 'touchmove') {
      e.preventDefault();
    }
    
    // Calculate cursor position and move the slider
    const pageX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
    const distance = pageX - startX;
    
    // Update velocity for momentum scrolling
    velocity = pageX - lastPageX;
    lastPageX = pageX;
    
    slider.scrollLeft = scrollLeft - distance;
  };

  const stopDrag = () => {
    if (!isDragging) return;
    
    isDragging = false;
    slider.classList.remove('dragging');
    
    // Apply momentum scrolling with decay
    const startVelocity = velocity * 10; // Amplify velocity for noticeable effect
    let currentVelocity = startVelocity;
    const friction = 0.95; // Friction factor (0-1), higher = less friction
    
    const applyMomentum = () => {
      // If velocity is very small, stop the animation
      if (Math.abs(currentVelocity) < 0.5) {
        cancelAnimationFrame(rafId);
        rafId = null;
        
        // Update pagination dots and progress bar after momentum scroll
        updatePaginationDots();
        updateProgressBar();
        
        // Restart autoplay if it was on
        if (isAutoPlaying && !autoPlayInterval) {
          autoPlayInterval = setInterval(scrollNext, 3000);
        }
        return;
      }
      
      // Apply velocity to scroll position
      slider.scrollLeft -= currentVelocity;
      
      // Apply friction to gradually slow down
      currentVelocity *= friction;
      
      // Continue animation
      rafId = requestAnimationFrame(applyMomentum);
    };
    
    // Only apply momentum if velocity is significant
    if (Math.abs(startVelocity) > 1) {
      rafId = requestAnimationFrame(applyMomentum);
    } else {
      // For small movements, just update UI
      updatePaginationDots();
      updateProgressBar();
      
      // Restart autoplay if it was on
      if (isAutoPlaying && !autoPlayInterval) {
        autoPlayInterval = setInterval(scrollNext, 3000);
      }
    }
  };

  // Add click events to pagination dots
  paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const scrollPosition = index * (slider.scrollWidth / paginationDots.length);
      slider.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      
      setTimeout(() => {
        updatePaginationDots();
        updateProgressBar();
      }, 500);
    });
  });

  // Add event listeners to buttons
  nextBtn.addEventListener('click', scrollNext);
  prevBtn.addEventListener('click', scrollPrev);
  autoPlayBtn.addEventListener('click', toggleAutoPlay);

  // Add drag event listeners with passive option for touch events
  slider.addEventListener('mousedown', startDrag);
  slider.addEventListener('touchstart', startDrag, { passive: false }); // Changed to non-passive
  
  slider.addEventListener('mousemove', doDrag);
  slider.addEventListener('touchmove', doDrag, { passive: true });
  
  // Add document-level event listeners to handle release outside the slider
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchend', stopDrag);
  
  // Listen for scroll events to update progress bar and pagination
  slider.addEventListener('scroll', () => {
    updateProgressBar();
    updatePaginationDots();
  });
  
  // Initialize autoplay off
  autoPlayBtn.textContent = 'Auto play >';
  
  // Initial updates
  updateProgressBar();
  updatePaginationDots();
  
  // Handle visibility change (pause when tab is not visible)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isAutoPlaying && autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    } else if (!document.hidden && isAutoPlaying && !autoPlayInterval) {
      autoPlayInterval = setInterval(scrollNext, 3000);
    }
  });
  
  // Handle window resize to recalculate card dimensions
  window.addEventListener('resize', () => {
    // Re-calculate card width
    const updatedCardWidth = cards[0]?.offsetWidth + 16;
    if (updatedCardWidth !== cardWidth) {
      // Update progress and pagination
      updateProgressBar();
      updatePaginationDots();
    }
  });
}