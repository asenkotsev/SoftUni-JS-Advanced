function solve(arr) {
   let result = [];
   let counter = 0;
   for(let i = 0; i < arr.length; i++) {
      if(i == 0) {
         result.push(arr[0]);
      } else {
         if(arr[i] >= result[counter]) {
            result.push(arr[i]);
            counter++;
         }
      }
   }
   console.log(result.join('\n'));
   
}

solve([1,
   3,
   8,
   4,
   10,
   12,
   3,
   2,
   24])