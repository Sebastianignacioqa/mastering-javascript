var getFirstElementOfProperty =  (obj,key) =>{

if (obj[key].length == 0 || !Array.isArray(obj[key]) || obj[key] === undefined){
   return undefined
}
else {

}
return obj.key[0];
}