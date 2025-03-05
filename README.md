# Counter Function

This JavaScript counting function delivers smooth, dynamic number animations for your webpage counters. It comes with a range of customizable features, including adjustable decimal precision, flexible counting speed, reverse counting, and support for negative numbers. Additionally, it triggers animations when the counter enters the viewport, ensuring an engaging user experience as visitors scroll through your page.

## Features

- **Smooth number animations:** Provides a smooth, visually appealing animation as the counter counts up or down.
- **Customizable decimal precision:** Allows you to specify the number of decimal places for the counter, making it suitable for both whole and decimal numbers.
- **Adjustable counting pace:** The speed of the animation can be customized, letting you control how quickly the counter reaches its target.
- **Support for reverse counting:** Enables the counter to count backwards, starting from a higher number and decreasing to a lower number.
- **Handles negative numbers:** The counter can work with both positive and negative numbers, accommodating various scenarios.
- **Starts when the counter enters the viewport:** The counter animation begins as soon as it becomes visible on the page, triggering when the user scrolls to it.
- **Supports various prefixes and suffixes:** Allows the addition of symbols such as $, B (billion), M (million), +, -, and other custom signs to enhance readability and context.

## How to use

### 1️⃣ Download the Counter Script
- Download the counter.js file and add it to your project directory.
### 2️⃣ Include the Script in Your HTML
- Make sure to include the counter.js file in your HTML before closing the <body> tag:
  ```<script src="counter.js"></script>```
### 3️⃣ Add the Counter Element
- Use a ```<div>``` tag with the class "counter" and specify the necessary attributes.
- Example: ```<div class="counter" data-from="0" data-to="1000" data-speed="1000" addDollar="true" addBillion="true"></div>```

## Attributes

- **data-from**: The starting number of the counter.
- **data-to**: The ending number of the counter.
- **data-speed**: Sets the duration (in milliseconds) for the counter, controlling its speed. A value of 1 is the fastest, while higher values slow the animation down.
- **addDollar:** If set to "true", appends a '$' symbol at the biginning of the counter value during the animation. (If you don't want the $ symbol, simply omit this attribute.)
- **addPlus**: If set to "true", appends a '+' symbol at the end of the counter value during the animation. (If you don't want the + symbol, simply omit this attribute.)
- **addMillion:** If set to "true", appends a 'M' symbol at the end of the counter value during the animation. (If you don't want the M symbol, simply omit this attribute.)
- **addBillion:** If set to "true", appends a 'B' symbol at the end of the counter value during the animation. (If you don't want the B symbol, simply omit this attribute.)
