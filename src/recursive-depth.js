const CustomError = require("../extensions/custom-error");


module.exports = class DepthCalculator {
    calculateDepth(arr) {

            let depth = 1;
            for(let i = 0; i < arr.length; i++) {
              if(typeof arr[i] == 'object') {
                let dep = this.calculateDepth(arr[i]);
                if(dep > depth - 1) depth = dep + 1;
              }
            }
            return depth;
        }
};