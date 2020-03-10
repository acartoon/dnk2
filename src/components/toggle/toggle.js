import './toggle.sass';
import '../input/input';
import { transformPrice } from '../../js/utils'

const getPrice = (minValue, maxValue, value) => {
  const result = minValue + (maxValue - minValue) * value;
  return transformPrice(result)
}

const handleMin = document.querySelector(`[handle-type='min']`);
const handleMax = document.querySelector(`[handle-type='max']`);
const inputMinValue = document.querySelector(`[input-type='min']`);
const inputMaxValue = document.querySelector(`[input-type='max']`);
const scale = document.querySelector(`.range-slider__scale`);
const progressBar = document.querySelector(`.range-slider__progress`);

const handleWidth = handleMin.getBoundingClientRect().width;
const scaleWidth = scale.getBoundingClientRect().width;

const DIFFERENCE = 40;
let BASEMINVALUE = 0;
let BASEMAXVALUE = scaleWidth - handleWidth;
let minValue = BASEMINVALUE;
let maxValue = 80;

handleMin.style.left = `${minValue}px`;
handleMax.style.left = `${maxValue}px`;
progressBar.style.left  = `${minValue}px`;
progressBar.style.right  = `${scaleWidth - maxValue}px`;

inputMinValue.value = getPrice(minValue, BASEMAXVALUE, minValue/BASEMAXVALUE);

const STATE = {
  min: 'min',
  max: 'max',
};

const mousedown = (evt, handle, state) => {
  
  evt.preventDefault();
  const handleLeft = handle.getBoundingClientRect().left;
  const scaleLeft = scale.getBoundingClientRect().left;
  let shiftX = event.clientX - handleLeft;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let coordX = event.clientX - shiftX - scaleLeft;
    let minCoord = (state === STATE.min) ? BASEMINVALUE : minValue + DIFFERENCE;
    let maxCoord = (state === STATE.min) ? maxValue - DIFFERENCE : BASEMAXVALUE;

    coordX = (coordX < minCoord ) ? minCoord : (coordX > maxCoord) ? maxCoord : coordX;
    const result = coordX/BASEMAXVALUE;
    handle.style.left = `${coordX}px`;

    if(state === STATE.min) {
      progressBar.style.left= `${coordX}px`;
      minValue = coordX;
      inputMinValue.value = getPrice(1000, 5000, result);
    }
    else if (state === STATE.max) {
      progressBar.style.right= `${scaleWidth - coordX}px`;
      maxValue = coordX;
      inputMaxValue.value = getPrice(1000, 5000, result);
    }
  }
  
  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
}

handleMin.addEventListener(`mousedown`, (evt) => {
  mousedown(evt, handleMin, STATE.min);
})

handleMax.addEventListener(`mousedown`, (evt) => {
  mousedown(evt, handleMax, STATE.max);
})
