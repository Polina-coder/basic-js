const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const znach = 0.693; 

module.exports = function dateSample(sampleActivity) {
  let value = 0;
  if(sampleActivity && typeof sampleActivity == 'string')
	value = parseFloat(sampleActivity)
  if(value > 0 && value < MODERN_ACTIVITY) 
	return Math.ceil(Math.log(MODERN_ACTIVITY / value) * HALF_LIFE_PERIOD / znach)
  return false 
};
