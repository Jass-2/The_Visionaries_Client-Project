export function setupVictoriaSlider() {
  const sliderRows = document.querySelectorAll('.recipients-row');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const autoPlayBtn = document.querySelector('.auto-play-btn');
  const paginationDots = document.querySelectorAll('.pagination-dot');

  if (!sliderRows.length || !prevBtn || !nextBtn || !autoPlayBtn) return;

  const firstRow = sliderRows[0];
  const secondRow = sliderRows[1];

  const cards = firstRow.querySelectorAll('.recipient-card');
  const cardWidth = cards[0]?.offsetWidth + 16;
  let autoPlayInterval = null;
  let isAutoPlaying = false;

  let isDragging = false;
  let startX = 0;
  let scrollLeft = [0, 0];
  let lastPageX = 0;
  let velocity = 0;
  let rafId = null;

  const updatePaginationDots = () => {
    if (!paginationDots.length) return;

    const scrollPercentage = firstRow.scrollLeft / (firstRow.scrollWidth - firstRow.clientWidth);
    const dotIndex = Math.min(
      Math.floor(scrollPercentage * paginationDots.length),
      paginationDots.length - 1
    );

    paginationDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === dotIndex);
    });
  };

  const scrollNext = () => {
    sliderRows.forEach(row => {
      row.scrollBy({ left: cardWidth, behavior: 'smooth' });

      if (row.scrollLeft + row.clientWidth >= row.scrollWidth - cardWidth) {
        setTimeout(() => {
          row.scrollTo({ left: 0, behavior: 'smooth' });
        }, 500);
      }
    });

    setTimeout(() => {
      updatePaginationDots();
    }, 400);
  };

  const scrollPrev = () => {
    sliderRows.forEach(row => {
      row.scrollBy({ left: -cardWidth, behavior: 'smooth' });

      if (row.scrollLeft <= cardWidth) {
        setTimeout(() => {
          row.scrollTo({ left: row.scrollWidth - row.clientWidth, behavior: 'smooth' });
        }, 500);
      }
    });

    setTimeout(() => {
      updatePaginationDots();
    }, 400);
  };

  const toggleAutoPlay = () => {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }

    isAutoPlaying = !isAutoPlaying;

    if (isAutoPlaying) {
      autoPlayBtn.textContent = 'Stop';
      autoPlayBtn.classList.add('playing');
      autoPlayInterval = setInterval(scrollNext, 3000);
    } else {
      autoPlayBtn.innerHTML = 'Auto play &rsaquo;';
      autoPlayBtn.classList.remove('playing');
    }
  };

  const startDrag = (e) => {
    isDragging = true;
    sliderRows.forEach(row => row.classList.add('dragging'));

    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }

    const pageX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
    startX = pageX;
    lastPageX = pageX;

    scrollLeft = Array.from(sliderRows).map(row => row.scrollLeft);
    velocity = 0;

    if (isAutoPlaying && autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }

    if (e.type !== 'touchstart') {
      e.preventDefault();
    }
  };

  const doDrag = (e) => {
    if (!isDragging) return;

    if (e.type !== 'touchmove') {
      e.preventDefault();
    }

    const pageX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
    const distance = pageX - startX;

    velocity = pageX - lastPageX;
    lastPageX = pageX;

    sliderRows.forEach((row, index) => {
      row.scrollLeft = scrollLeft[index] - distance;
    });

    updatePaginationDots();
  };

  const stopDrag = () => {
    if (!isDragging) return;

    isDragging = false;
    sliderRows.forEach(row => row.classList.remove('dragging'));

    const startVelocity = velocity * 10;
    let currentVelocity = startVelocity;
    const friction = 0.95;

    const applyMomentum = () => {
      if (Math.abs(currentVelocity) < 0.5) {
        cancelAnimationFrame(rafId);
        rafId = null;

        updatePaginationDots();

        if (isAutoPlaying && !autoPlayInterval) {
          autoPlayInterval = setInterval(scrollNext, 3000);
        }
        return;
      }

      sliderRows.forEach(row => {
        row.scrollLeft -= currentVelocity;
      });

      updatePaginationDots();

      currentVelocity *= friction;

      rafId = requestAnimationFrame(applyMomentum);
    };

    if (Math.abs(startVelocity) > 1) {
      rafId = requestAnimationFrame(applyMomentum);
    } else {
      updatePaginationDots();

      if (isAutoPlaying && !autoPlayInterval) {
        autoPlayInterval = setInterval(scrollNext, 3000);
      }
    }
  };

  paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      sliderRows.forEach(row => {
        const scrollPosition = index * (row.scrollWidth / paginationDots.length);
        row.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      });

      setTimeout(() => {
        updatePaginationDots();
      }, 500);
    });
  });

  nextBtn.addEventListener('click', scrollNext);
  prevBtn.addEventListener('click', scrollPrev);
  autoPlayBtn.addEventListener('click', toggleAutoPlay);

  sliderRows.forEach(row => {
    row.style.cursor = 'grab';

    row.addEventListener('mousedown', startDrag);
    row.addEventListener('mousemove', doDrag);

    row.addEventListener('touchstart', startDrag, { passive: false });
    row.addEventListener('touchmove', doDrag, { passive: true });
  });

  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchend', stopDrag);

  autoPlayBtn.innerHTML = 'Auto play &rsaquo;';

  updatePaginationDots();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isAutoPlaying && autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    } else if (!document.hidden && isAutoPlaying && !autoPlayInterval) {
      autoPlayInterval = setInterval(scrollNext, 3000);
    }
  });

  window.addEventListener('resize', () => {
    updatePaginationDots();
  });
}
