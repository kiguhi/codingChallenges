
//The Java Script Code
//program to count the number of vowels in a string

function countVowelConsonant(input) { 

var str=input;

<!-- find the count of vowels using regex-->
const v_count = str.match(/[aeiou]/gi).length;
const c_count = str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
<!-- return number of vowels-->
return v_count;
}  

