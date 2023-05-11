# Password Generator

A simple npm package for generating colors.

## Installation

To install the Random Color Generator package, use the following command:

`npm i @jaycd598/generate-random-color`

## Usage

```jsx
const { generateRandomHexColor, generateRandomRGBColor } = require('@jaycd598/generate-random-color');

// Generate and display random colors
const hexColor = generateRandomHexColor();
const rgbColor = generateRandomRGBColor();

console.log('Random HEX color:', hexColor);
console.log('Random RGB color:', rgbColor);
```
