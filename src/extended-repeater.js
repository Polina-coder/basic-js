const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let additionStr;
  let result;
  if(options.separator==undefined)
  {
  options.separator="+";
  }
  if(options.addition!==undefined)
  {
  str+=String(options.addition);
  
  if(String(options.additionSeparator)==undefined)
  options.additionSeparator="|" ;
  for(let i=0; i<options.additionRepeatTimes-1; i++)
  {
  str+=String(options.additionSeparator);
  str+=String(options.addition);
  }
  
  }
  result=str;
  for(let j=0; j<options.repeatTimes-1; j++)
  {
  result+=options.separator;
  result+=str;
  }
  
  return result;
  };
  