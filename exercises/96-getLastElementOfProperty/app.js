var getLastElementOfProperty =  (obj,key) =>{
let x= obj[key].length-1
if (obj[key].length == 0 || !Array.isArray(obj[key]) || obj[key] === undefined){
   return undefined
}
else {
return obj.key[x];
}
}