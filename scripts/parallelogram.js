function calculateParallelogramArea() {
    // get parallelogram base value
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    // get parallelogram height
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // calculate area
    const area = base * height;
    console.log('area of parallelogram is ',area);

    // display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}