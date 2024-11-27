document.addEventListener('DOMContentLoaded', () => {
  // Function to run the counter animation

  const startCounter = (counter) => {
    const from = parseFloat(counter.getAttribute('data-from'));
    const to = parseFloat(counter.getAttribute('data-to'));
    const isDecimalNum = parseInt(counter.getAttribute('isDecimalNum'), 10);
    const speed = parseInt(counter.getAttribute('data-speed'), 10);
    const exponent = parseInt(counter.getAttribute('exponent'), 10);
    const range = to - from;

    let current = from;

    // console.log(range);
    //To check if the counter value should be decreased
    const isNegative = () => {
      if (Math.sign(range) == -1) {
        return true;
      } else {
        return false;
      }
    };
    // console.log(isNegative());

    const step = () => {
      if (Math.sign(range) == 0) {
        counter.textContent = to;
        return;
      }

      let increment;

      //To check if the counter value should be decimal number
      // if (isDecimalNum === 1) {
      //   let increment;
      //   if (isNegative()) {
      //     increment = -Math.pow(10, -exponent);
      //   } else {
      //     increment = Math.pow(10, -exponent);
      //   }
      //   counter.textContent = parseFloat(current.toFixed(exponent));
      //   current += increment;
      // } else {
      increment = (range / speed) * 5;
      incrementWithoutZero = parseInt(
        increment.toString().replace(/0/g, '1'),
        10
      );
      // incrementWithoutZeroInDecimal = parseFloat(
      //   increment.toString().replace(/0/g, '1')
      // );
      // console.log('Increment:');
      // console.log(increment);
      // console.log('current:');
      // console.log(current);
      // console.log('withoutZero:');
      // console.log(incrementWithoutZero);
      // console.log(incrementWithoutZeroInDecimal);

      console.log(current.toFixed(exponent));

      if (isDecimalNum == 1) {
        counter.textContent = current.toFixed(exponent);
      } else {
        counter.textContent = Math.floor(current);
      }

      // if (isDecimalNum == 1) {
      //   if (isNegative()) {
      //     if (increment > -1) {
      //       current += increment.toFixed(exponent);
      //     } else {
      //       current += incrementWithoutZeroInDecimal.toFixed(exponent);
      //     }
      //   } else {
      //     current += increment;
      //   }
      // } else {
      if (isNegative()) {
        if (increment > -10) {
          current += increment;
        } else {
          current += incrementWithoutZero;
        }
      } else {
        if (increment < 10) {
          current += increment;
        } else {
          current += incrementWithoutZero;
        }
      }
      // }

      // }

      if (isNegative()) {
        if (current <= to) {
          counter.textContent = to;
        } else {
          setTimeout(step, 1);
        }
      } else {
        if (current >= to) {
          counter.textContent = to;
        } else {
          setTimeout(step, 1);
        }
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
