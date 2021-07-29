var select = (array,obj) =>{

var nuObj = {};
  for (var i in array) {
    for (var key in obj) {
      if (array[i] === key) {
        nuObj[key] = obj[key];

      }
    }
  } return nuObj;
}