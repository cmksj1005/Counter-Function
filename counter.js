document.addEventListener('DOMContentLoaded', () => {
  // Function to run the counter animation
  let isIncreasing = true;
  const startCounter = (counter) => {
    const from = parseInt(counter.getAttribute('data-from'), 10);
    const to = parseInt(counter.getAttribute('data-to'), 10);
    const time = parseInt(counter.getAttribute('data-time'), 10);
    const isDecimalNum = parseInt(counter.getAttribute('isDecimalNum'), 10);
    const exponent = parseInt(counter.getAttribute('exponent'), 10);

    let current = from;
    const range = to - from;

    //To check if the counter value should be decreased
    const isNegative = () => {
      if (Math.sign(range) == -1) {
        return true;
      } else {
        return false;
      }
    };

    const step = () => {
      if (Math.sign(range) == 0) {
        counter.textContent = to;
        return;
      }

      //To check if the counter value should be decimal number
      if (isDecimalNum === 1) {
        let increment;
        if (isNegative() === true) {
          increment = -Math.pow(10, -exponent);
        } else {
          increment = Math.pow(10, -exponent);
        }
        current += increment;
        counter.textContent = parseFloat(current.toFixed(exponent));
      } else {
        if (isNegative() === true) {
          increment = -1;
        } else {
          increment = 1;
        }
        current += increment;
        counter.textContent = current;
      }

      if (current !== to) {
        setTimeout(step, time);
      } else {
        isIncreasing = false;
      }
    };

    step();
  };

  // Created an additional '000' counter to simulate faster counter animation
  const startExtraCounter = (extraCounter) => {
    const data = parseInt(extraCounter.getAttribute('data'), 10);
    let extraNum = 0;
    const extraStep = () => {
      if (extraNum >= 999) {
        extraNum = 0;
      }
      extraNum += 111;
      extraCounter.textContent = extraNum;
      setTimeout(extraStep, 1); // if you want to adjust animation speed for '000' counter, change this number.

      if (isIncreasing === false) {
        if (Number.isNaN(data) || data == 0) {
          extraCounter.textContent = '000';
        } else {
          extraCounter.textContent = data;
        }

        return;
      }
    };
    extraStep();
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
    const extraCounters = document.querySelectorAll('.extraCounter');

    counters.forEach((counter) => {
      // Check if the counter is in the viewport and hasn't started yet
      if (isInViewport(counter) && !counter.classList.contains('started')) {
        startCounter(counter);
        counter.classList.add('started'); // Mark as started to prevent rerun
      }
    });

    extraCounters.forEach((extraCounter) => {
      // Check if the extraCounter is in the viewport and hasn't started yet
      if (
        isInViewport(extraCounter) &&
        !extraCounter.classList.contains('started')
      ) {
        startExtraCounter(extraCounter);
        extraCounter.classList.add('started'); // Mark as started to prevent rerun
      }
    });
  };

  // Listen to the scroll event to check visibility of the counters
  window.addEventListener('scroll', startCountersOnScroll);

  // Initial check in case some counters are already in the viewport when the page loads
  startCountersOnScroll();
});
