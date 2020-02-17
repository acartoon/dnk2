
const dotMin = document.querySelector(`.toggle__handle--min`)
const inputMax = document.querySelector(`.toggle__input--max`)
const inputMin = document.querySelector(`.toggle__input--min`)
const sliderDot = document.querySelector(`.toggle__handle--max`)
const sliderProcess = document.querySelector(`.toggle__bar-progress`)
const sliderLine = document.querySelector(`.toggle__bar`)


let minSliderValue = 0;
let maxSliderValue = 165;
sliderProcess.style.right = `${maxSliderValue}px`;
const minDifference = 50;
sliderDot.style.left = `${maxSliderValue}px`;
dotMin.style.left = `${minSliderValue}px`;

const getPrice = (minValue, maxValue, value) => {
  const result = minValue + (maxValue - minValue) * value;
  return result;
}

sliderDot.addEventListener('mousedown', (event) => {
  event.preventDefault();
  let shiftX = event.clientX - sliderDot.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let coordX = event.clientX - shiftX - sliderLine.getBoundingClientRect().left;
    const maxValue = sliderLine.getBoundingClientRect().width - sliderDot.getBoundingClientRect().width;
    coordX = (coordX < minSliderValue + minDifference ) ? minSliderValue + minDifference : (coordX > maxValue) ? maxValue : coordX;
    
    sliderDot.style.left = coordX + 'px';
    sliderProcess.style.right = sliderLine.getBoundingClientRect().width - coordX + 'px';
    maxSliderValue = coordX;
    const value = coordX/maxValue;
    inputMax.value=getPrice(0, 5000, value);
  }
  
  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
});

dotMin.addEventListener('mousedown', (event) => {
  event.preventDefault();
  let shiftX = event.clientX - dotMin.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let coordX = event.clientX - shiftX - sliderLine.getBoundingClientRect().left;
    const maxValue = maxSliderValue - minDifference;
    coordX = (coordX < 0) ? 0 : (coordX > maxValue) ? maxValue : coordX;
    
    dotMin.style.left = coordX + 'px';
    sliderProcess.style.left=coordX + 'px';
    const value = coordX/(sliderLine.getBoundingClientRect().width - sliderDot.getBoundingClientRect().width);
    inputMin.value=getPrice(0, 5000, value);
    minSliderValue = coordX;
  }
  
  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
});



