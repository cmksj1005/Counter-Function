document.addEventListener('DOMContentLoaded', () => {
  // Function to run the counter animation
  const startCounter = (counter) => {
    const from = parseInt(counter.getAttribute('data-from'), 10);
    const to = parseInt(counter.getAttribute('data-to'), 10);
    const time = parseInt(counter.getAttribute('data-time'), 10);

    let current = from;
    const range = to - from;
    const stepTime = Math.abs(time / range);

    const step = () => {
      current += Math.sign(range);
      counter.textContent = current;

      if (current !== to) {
        setTimeout(step, stepTime);
      }
    };

    step();
  };

  // Function to check if the counter is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };

  // Function to start the counter when it's visible
  const startCountersOnScroll = () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
      // Check if the counter is in the viewport and hasn't started yet
      if (isInViewport(counter) && !counter.classList.contains('started')) {
        startCounter(counter);
        counter.classList.add('started'); // Mark as started to prevent rerun
      }
    });
  };

  // Listen to the scroll event to check visibility of the counters
  window.addEventListener('scroll', startCountersOnScroll);

  // Initial check in case some counters are already in the viewport when the page loads
  startCountersOnScroll();
});
