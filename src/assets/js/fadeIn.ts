window.addEventListener('scroll', () => {
  const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, a, span');

  textElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0);

    if (isVisible) {
      element.style.transition = 'opacity 2.5s'; // Increased transition duration to 2s for slower fade
      element.style.opacity = '1';
    } else {
      element.style.transition = 'opacity 2.5s'; // Increased transition duration to 2s for slower fade
      element.style.opacity = '0';
    }
  });
});
