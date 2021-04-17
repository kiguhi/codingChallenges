    function myFunction(input) {
     let missing=[];
     var result;
     let a = input);
     a.sort(function(a, b){return a - b});
     
     for (var i = 0; i < a.length; i++) {
        if (a[i] - a[i - 1] > 1){
          result= a[i] - 1;
          missing.push(result);
        }
    }
    return missing;
    }
