
 //program to count the number of vowels in a string-->

function squareNumber(input) { 

const num=input;
const numStr = String(num);
let res = '';
for(let i = 0; i < numStr.length; i++){
      const square = Math.pow(+numStr[i], 2);
      res += square;
   };
return res;
}  
