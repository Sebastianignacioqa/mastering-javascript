var array1 = [1, 2];
var addToFrontOfNew = (array,element)=>{
newarray = array.slice()
newarray.unshift(element);
return newarray;
}

console.log(addToFrontOfNew(array1,556))
