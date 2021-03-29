const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let new_arr = []
  
  if(!Array.isArray(arr)) return ERROR

  if (arr.length === 0) return []

  for(let i = 0; i < arr.length; i++) 
     if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') 
     new_arr.push(arr[i])
   
     else if (arr[i] === '--double-next' && arr[i + 1] !== undefined) 
     new_arr.push(arr[i + 1])
    
     else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined && arr[i-2] !== "--discard-next") 
     new_arr.push(arr[i - 1])
    
     else if (arr[i] === '--discard-next' && arr[i + 1] !== undefined) 
    i++

     else if (arr[i] === '--discard-prev' && arr[i - 1] !== undefined && arr[i-2] !== "--discard-next") 
     new_arr.pop(arr[i - 1])
  
  return new_arr
};
