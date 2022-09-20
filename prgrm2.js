function flattenArray(arr) {
    let result = [];
  
    for (const element of arr) {
      if (Array.isArray(element)) {
       
        result = result.concat(flattenArray(element));
      
      } else {
        result.push(element);
      }
    }
  
    return result;
  }
  
  console.log(flattenArray([1, 2, [3, 4, [5]]]));