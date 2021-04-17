
<!-- program to count the number of vowels in a string-->

function maskify(input) { 
   var credit_no=input;
   let creditArray = Array.from(credit_no);
   let newArray = [];
   let lastFour = credit_no.slice(-4);
   if (creditArray.length<=4) {
    return credit_no;
   }
   else{
     let index=creditArray.length-4;
     creditArray.splice(index, 4);
     for (let i = 0; i < creditArray.length; i++) {
      newArray.push('#');
     }
     return newArray.concat(lastFour).join('');
   }
}  
