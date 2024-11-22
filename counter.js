document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    const from = parseInt(counter.getAttribute('data-from'), 10);
    const to = parseInt(counter.getAttribute('data-to'), 10);
    const time = parseInt(counter.getAttribute('data-time'), 10);

    if (from === to) {
      counter.textContent = from;
      return;
    }

    const range = to - from;
    const stepTime = Math.abs(time / range);
    let current = from;

    const step = () => {
      current += Math.sign(range);
      counter.textContent = current;
      if (current !== to) {
        setTimeout(step, stepTime);
      }
    };

    setTimeout(step, stepTime);
  });
});
