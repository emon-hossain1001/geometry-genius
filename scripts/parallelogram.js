// function calculateParallelogramArea() {
//     // get parallelogram base value
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     console.log(base);

//     // get parallelogram height
//     const heightInput = document.getElementById('parallelogram-height');
//     const heightText = heightInput.value;
//     const height = parseFloat(heightText);
//     console.log(height);

//     // calculate area
//     const area = base * height;
//     console.log('area of parallelogram is ',area);

//     // display parallelogram area
//     const parallelogramAreaSpan = document.getElementById('parallelogram-area');
//     parallelogramAreaSpan.innerText = area;
// }

function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    // console.log('base value', base);

    const height = getInputValueById('parallelogram-height');
    // console.log(height);

    const area = base * height;
    console.log('area of the parallelogram is ',area);

    setInnerTextById('parallelogram-area',area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}