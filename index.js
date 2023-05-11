// Generate a random color in hexadecimal format (e.g., #FFFFFF)
function generateRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate a random color in RGB format (e.g., rgb(255, 255, 255))
function generateRandomRGBColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

module.exports = {
    generateRandomHexColor,
    generateRandomRGBColor
};