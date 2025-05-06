

  const pictureSources = [
    { src: 'Images/Logo/pics/pics.jpg', text: 'Mountains at Sunrise' },
    { src: 'Images/Logo/pics/pics1.jpg', text: 'Nice Beach' },
    { src: 'Images/Logo/pics/pics2.jpg', text: 'Mountains Lake' },
    { src: 'Images/Logo/pics/pics3.jpg', text: 'Beach Resort' },
    { src: 'Images/Logo/pics/pics4.jpg', text: 'Tropical Island' }
  ];
  
  const track = document.querySelector('.slider-track');
  const slider = document.querySelector('.slider');
  

  [...pictureSources, ...pictureSources].forEach((item) => {
    const card = document.createElement('div');
    card.className = 'image-card';
    card.style.backgroundImage = `url(${item.src})`;
  
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.textContent = item.text;
  
    card.appendChild(overlay);
    track.appendChild(card);
  });
  
  let pos = 0;
  let animationId;
  
  function animateSlider() {
    pos -= 1.8;
    if (Math.abs(pos) >= track.scrollWidth / 2) {
      pos = 0;
    }
    track.style.transform = `translateX(${pos}px)`;
    animationId = requestAnimationFrame(animateSlider);
  }
  
  animateSlider(); // Start animation
  
  // Pause and resume logic
  function pauseSlider() {
    cancelAnimationFrame(animationId);
  }
  function resumeSlider() {
    cancelAnimationFrame(animationId); // Avoid duplicates
    animateSlider();
  }
  
  slider.addEventListener('mouseenter', pauseSlider);
  slider.addEventListener('mouseleave', resumeSlider);
  
  // Dragging logic
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  
  slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    pauseSlider();
  });
  
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      resumeSlider();
    }
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    pos += deltaX;
    track.style.transform = `translateX(${pos}px)`;
    startX = e.clientX;
  });