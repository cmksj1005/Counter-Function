# Counter Function

This app is crafted using HTML, CSS, and React to offer a streamlined note-taking experience. It allows you to effortlessly jot down titles and content for your notes. Additionally, you can categorize your notes under labels like Study, Work, Daily, or Play for organized storage. The app features a convenient sorting function, enabling you to arrange your notes either by Date or Category. Plus, it provides the flexibility to edit your notes whenever necessary.

## Features

- **Smooth number animations**: Provides a smooth, visually appealing animation as the counter counts up or down.
- **Customizable decimal precision**: Allows you to specify the number of decimal places for the counter, making it suitable for both whole and decimal numbers.
- **Adjustable counting pace**: The speed of the animation can be customized, letting you control how quickly the counter reaches its target.
- **Support for reverse counting**: Enables the counter to count backwards, starting from a higher number and decreasing to a lower number.
- **Handles negative numbers**: The counter can work with both positive and negative numbers, accommodating various scenarios.
- **Starts when the counter enters the viewport**: The counter animation begins as soon as it becomes visible on the page, triggering when the user scrolls to it.

## How to start

### Counter Class

Example: ```<span id="counter1" class="counter" data-from="1000" data-to="0" data-time="100" isDecimalNum="0"></span>```

- **id**: Use this to link to the Extra Counter Class. (no need to use it if you don't want to use the extra counter)
- **data-from**: The starting number of the counter.
- **data-to**: The ending number of the counter.
- **isDecimalNum**: Determines whether the counter is a decimal number or not (0 = whole number, 1 = decimal number).
- **exponent**: Specifies the number of decimal places for the counter.

### Extra Counter Class

Example: ```<span class="extraCounter" associatedId="counter1" data="945"></span>```

The extraCounter class creates a secondary counter that simulates a faster counting animation, typically displayed alongside the main counter. It updates the number rapidly in a looping fashion until the main counter finishes.

- **associatedId**: Links the extra counter to the main counter using the class ID.
- **data**: The number the extra counter will display once the main counter stops.
