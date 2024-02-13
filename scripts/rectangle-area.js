function calculateRectangleArea() {
  // get width of the rectangle
  const widthInput = document.getElementById("rectangle-width");
  const widthText = widthInput.value;
  const width = parseFloat(widthText);
  console.log(width);

//   get length of the rectangle
const lengthInput = document.getElementById('rectangle-length');
const lengthText = lengthInput.value;
const length = parseFloat(lengthText);
console.log(length);

const rectangleArea = length * width;
console.log('the area of rectangle is ',rectangleArea);

// display rectangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = rectangleArea;
}
