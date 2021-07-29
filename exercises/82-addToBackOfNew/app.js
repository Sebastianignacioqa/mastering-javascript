var array1 = [1, 2];

var addToBackOfNew = (array,element)=>{
newarray = array.slice()
newarray.push(element);
return newarray;
}

console.log(addToBackOfNew(array1,25))