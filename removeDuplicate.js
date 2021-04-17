function myFunction(input) {  
  let a = input;
  let unique=[];
  a.forEach(element => {
    if (!unique.includes(element)) {
        unique.push(element);
    }
  });
  return unique;
}      
