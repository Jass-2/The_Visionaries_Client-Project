export function initLettersApp(createApp) {
  createApp({
    data() {
      return {
        letters: []
      };
    },
    mounted() {
      this.fetchLetters()
        .then(() => {
          // Initialize slider after letters are loaded
          this.$nextTick(() => {
            setupLettersSlider();
          });
        });
    },
    methods: {
      async fetchLetters() {
        try {
          const res = await fetch('http://localhost/The_Visionaries_Client-Project/backend/public/letters');
          this.letters = await res.json();
        } catch (err) {
          console.error('Failed to load letters:', err);
        }
      },
      formatLetter(text) {
        return text.replace(/\n/g, '<br>');
      }
    }
  }).mount('#letters-app');
}

function setupLettersSlider() {
  const slider = document.querySelector('.letters-slider');
  if (!slider) return;
  
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let lastPageX = 0;
  let velocity = 0;

  const startDrag = (e) => {
    isDragging = true;
    slider.classList.add('dragging');
    const pageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
    startX = pageX;
    lastPageX = pageX;
    scrollLeft = slider.scrollLeft;
    velocity = 0;
  };

  const doDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const pageX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
    const distance = pageX - startX;
    velocity = pageX - lastPageX;
    lastPageX = pageX;
    slider.scrollLeft = scrollLeft - distance;
  };

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    slider.classList.remove('dragging');
    
    // Add momentum scrolling
    let currentVelocity = velocity * 5;
    const animate = () => {
      if (Math.abs(currentVelocity) < 0.5) return;
      slider.scrollLeft -= currentVelocity;
      currentVelocity *= 0.95;
      requestAnimationFrame(animate);
    };
    animate();
  };

  // Add event listeners
  slider.addEventListener('mousedown', startDrag);
  slider.addEventListener('touchstart', startDrag);
  slider.addEventListener('mousemove', doDrag);
  slider.addEventListener('touchmove', doDrag);
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchend', stopDrag);
}