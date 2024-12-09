# Counter Function

This JavaScript counting function delivers smooth, dynamic number animations for your webpage counters. It comes with a range of customizable features, including adjustable decimal precision, flexible counting speed, reverse counting, and support for negative numbers. Additionally, it triggers animations when the counter enters the viewport, ensuring an engaging user experience as visitors scroll through your page.

## Features

- **Smooth number animations**: Provides a smooth, visually appealing animation as the counter counts up or down.
- **Customizable decimal precision**: Allows you to specify the number of decimal places for the counter, making it suitable for both whole and decimal numbers.
- **Adjustable counting pace**: The speed of the animation can be customized, letting you control how quickly the counter reaches its target.
- **Support for reverse counting**: Enables the counter to count backwards, starting from a higher number and decreasing to a lower number.
- **Handles negative numbers**: The counter can work with both positive and negative numbers, accommodating various scenarios.
- **Starts when the counter enters the viewport**: The counter animation begins as soon as it becomes visible on the page, triggering when the user scrolls to it.

## How to start

### Counter Class

Example: ```<div class="counter" data-from="0" data-to="1.153" data-speed="1000" isDecimalNum="1" exponent="3"></div>```

- **data-from**: The starting number of the counter.
- **data-to**: The ending number of the counter.
- **data-speed**: Sets the duration (in milliseconds) for the counter, controlling its speed. A value of 1 is the fastest, while higher values slow the animation down.
- **isDecimalNum**: Determines whether the counter is a decimal number or not (0 = whole number, 1 = decimal number).
- **exponent**: Specifies the number of decimal places for the counter. (no need to use it if isDecimalNum = 0)
