const flatten = function(arr){
  let output = [];
  for (let val in arr){
    if (Array.isArray(arr[val]) === true) {
      for (let val1 of arr[val]) {
        output.push(val1);
      }
    } else {
      output.push(arr[val])
    }
  }
  return output
}

console.log(flatten([1, 'k', [3, 4], 5, [6]]));