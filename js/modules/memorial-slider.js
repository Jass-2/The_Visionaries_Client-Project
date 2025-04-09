
/**
 * Sets up the memorial voices slider functionality
 * with drag and smooth scrolling features
 */
export function setupVoicesSlider() {
  const slider = document.querySelector('.voices-slider');
  
  // Return early if slider doesn't exist
  if (!slider) return;
  
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let lastPageX = 0;
  let velocity = 0;
  let rafId = null; // For requestAnimationFrame

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

  // Prevent click events during drag
  const preventClickDuringDrag = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Add drag event listeners
  slider.addEventListener('mousedown', startDrag);
  slider.addEventListener('touchstart', startDrag, { passive: false });
  slider.addEventListener('mousemove', doDrag);
  slider.addEventListener('touchmove', doDrag, { passive: false });
  
  // Add document-level event listeners to handle release outside the slider
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchend', stopDrag);
  
  // Prevent clicks during drag
  slider.addEventListener('click', preventClickDuringDrag, { capture: true });
}

/**
 * Sets up the memorial wall slider functionality
 * with drag and smooth scrolling features
 */
export function setupMemorialWallSlider() {
  const slider = document.querySelector('.memorial-wall-slider');
  const addBtn = document.getElementById('add-memorial-message');
  const popup = document.querySelector('.memorial-message-popup');
  const closeBtn = document.querySelector('.memorial-form-close');
  const form = document.getElementById('memorial-form');
  
  // Return early if elements don't exist
  if (!slider || !addBtn || !popup || !closeBtn || !form) return;
  
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let lastPageX = 0;
  let velocity = 0;
  let rafId = null; // For requestAnimationFrame

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

  // Prevent click events during drag
  const preventClickDuringDrag = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Add drag event listeners
  slider.addEventListener('mousedown', startDrag);
  slider.addEventListener('touchstart', startDrag, { passive: false });
  slider.addEventListener('mousemove', doDrag);
  slider.addEventListener('touchmove', doDrag, { passive: false });
  
  // Add document-level event listeners to handle release outside the slider
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchend', stopDrag);
  
  // Prevent clicks during drag
  slider.addEventListener('click', preventClickDuringDrag, { capture: true });

  // Setup form popup functionality
  addBtn.addEventListener('click', () => {
    popup.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  // Close popup when clicking outside the form
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('memorial-name');
    const messageInput = document.getElementById('memorial-message');
    
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    
    if (name && message) {
      // Create a new memorial wall card
      const newCard = document.createElement('div');
      newCard.className = 'memorial-wall-card';
      
      const nameElement = document.createElement('h3');
      nameElement.className = 'memorial-wall-name';
      nameElement.textContent = name;
      
      const messageElement = document.createElement('p');
      messageElement.className = 'memorial-wall-message';
      messageElement.textContent = message;
      
      newCard.appendChild(nameElement);
      newCard.appendChild(messageElement);
      
      // Add the new card to the beginning of the slider
      slider.prepend(newCard);
      
      // Reset form
      nameInput.value = '';
      messageInput.value = '';
      
      // Close popup
      popup.classList.remove('active');
    }
  });
}