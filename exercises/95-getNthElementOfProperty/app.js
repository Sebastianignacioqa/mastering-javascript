var getNthElementOfProperty =  (obj,key,i) =>{

if (obj[key].length == 0 || !Array.isArray(obj[key]) || obj[key] === undefined){
   return undefined
}
else {
return obj.key[i];
}
}
