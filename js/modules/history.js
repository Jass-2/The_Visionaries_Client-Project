/**
 * Sets up the Battlefield slider functionality
 * with drag and smooth scrolling features
 */
export function setupBattlefieldSlider() {
    const slider = document.querySelector('.battlefield-slider');
    const tabs = document.querySelectorAll('.battlefield-tab');
    
    // Return early if slider elements don't exist
    if (!slider || !tabs.length) return;
    
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let currentIndex = 0;
    let lastPageX = 0;
    let velocity = 0;
  
    // Function to update active tab based on current slide
    const updateActiveTab = (index) => {
      tabs.forEach(tab => tab.classList.remove('active'));
      if (tabs[index]) tabs[index].classList.add('active');
    };
  
    // Function to go to a specific slide
    const goToSlide = (index) => {
      const slides = document.querySelectorAll('.battlefield-slide');
      
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
        slide.classList.toggle('active', i === index);
      });
      
      currentIndex = index;
      updateActiveTab(index);

      // Adjust slider height based on active slide content height
      const activeSlide = document.querySelector('.battlefield-slide.active');
      if (activeSlide) {
        const contentHeight = activeSlide.scrollHeight;
        slider.style.minHeight = `${contentHeight + 40}px`; // Add some padding
        activeSlide.style.minHeight = `${contentHeight}px`;
      }
    };
  
    // Initialize slides positioning
    const slides = document.querySelectorAll('.battlefield-slide');
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
      slide.style.display = 'block'; // Make all slides visible for slider
    });
  
    // Add click events to tabs
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        goToSlide(index);
      });
    });
  
    // Mouse drag event handlers with improved physics
    const startDrag = (e) => {
      isDragging = true;
      slider.classList.add('dragging');
      
      // Determine if it's a mouse or touch event
      const pageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
      startX = pageX;
      lastPageX = pageX;
      scrollLeft = slider.scrollLeft;
      velocity = 0;
      
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
      
      // If drag distance is significant, determine direction and switch slides
      if (Math.abs(distance) > 100) {
        if (distance > 0) {
          // Dragged right - go to previous slide
          goToSlide(currentIndex - 1);
        } else {
          // Dragged left - go to next slide
          goToSlide(currentIndex + 1);
        }
        isDragging = false;
        slider.classList.remove('dragging');
        return;
      }
      
      // For smaller movements, create a dragging effect by slightly moving the slides
      const slideWidth = slider.clientWidth;
      const dragRatio = distance / slideWidth;
      
      slides.forEach((slide, index) => {
        const offset = (index - currentIndex) * 100 + (dragRatio * 100);
        slide.style.transform = `translateX(${offset}%)`;
      });
    };
  
    const stopDrag = () => {
      if (!isDragging) return;
      
      isDragging = false;
      slider.classList.remove('dragging');
      
      // Apply momentum based on final velocity
      const finalVelocity = velocity;
      
      // If velocity is significant, determine direction and switch slides
      if (Math.abs(finalVelocity) > 5) {
        if (finalVelocity > 0) {
          // Swiped right - go to previous slide
          goToSlide(currentIndex - 1);
        } else {
          // Swiped left - go to next slide
          goToSlide(currentIndex + 1);
        }
      } else {
        // If velocity is not significant, snap back to current slide
        goToSlide(currentIndex);
      }
    };
  
    // Add drag event listeners
    slider.addEventListener('mousedown', startDrag);
    slider.addEventListener('touchstart', startDrag, { passive: false });
    slider.addEventListener('mousemove', doDrag);
    slider.addEventListener('touchmove', doDrag, { passive: true });
    
    // Add document-level event listeners to handle release outside the slider
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
    
    // Handle window resize to adjust heights
    window.addEventListener('resize', () => {
      goToSlide(currentIndex);
    });
    
    // Initialize first slide as active
    goToSlide(0);
  }
  
  /**
   * Sets up the Letters from Frontline slider functionality
   * with drag and smooth scrolling features
   */
  export function setupLettersSlider() {
    const slider = document.querySelector('.letters-slider');
    
    // Return early if slider elements don't exist
    if (!slider) return;
    
    const cards = slider.querySelectorAll('.letter-card');
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let lastPageX = 0;
    let velocity = 0;
  
    // Mouse drag event handlers with improved physics
    const startDrag = (e) => {
      isDragging = true;
      slider.classList.add('dragging');
      
      // Determine if it's a mouse or touch event
      const pageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
      startX = pageX;
      lastPageX = pageX;
      scrollLeft = slider.scrollLeft;
      velocity = 0;
      
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
      velocity = 0.8 * (pageX - lastPageX) + 0.2 * velocity;
      lastPageX = pageX;
      
      slider.scrollLeft = scrollLeft - distance;
    };
  
    const stopDrag = () => {
      if (!isDragging) return;
      
      isDragging = false;
      slider.classList.remove('dragging');
      
      // Apply momentum scrolling
      const startVelocity = velocity * 10;
      let currentVelocity = startVelocity;
      const friction = 0.95; // Friction factor (higher means less friction)
      let rafId = null;
      
      const applyMomentum = () => {
        // If velocity is very small, stop the animation
        if (Math.abs(currentVelocity) < 0.5) {
          cancelAnimationFrame(rafId);
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
      }
    };
  
    // Add drag event listeners
    slider.addEventListener('mousedown', startDrag);
    slider.addEventListener('touchstart', startDrag, { passive: false });
    slider.addEventListener('mousemove', doDrag);
    slider.addEventListener('touchmove', doDrag, { passive: true });
    
    // Add document-level event listeners to handle release outside the slider
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);
  }