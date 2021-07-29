var getAverageOfElementsAtProperty = (obj,key) =>{
let total = 0


  if (obj[key] === undefined || 
    obj[key].length == 0 || 
    !Array.isArray(obj[key])){
    return 0;
  }
    for (var i in obj.key) {
    total += obj[key][i];
  }
  return (total/obj[key].length);
  
   }

