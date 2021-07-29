var countAllCharacters = (str) =>{
var x = str.split("");
var obj = {};
for(var i=0; i<x.length; i++){
    if(typeof obj[x[i]] !== 'undefined'){
      obj[x[i]]+=1;
      
    } else {
      obj[x[i]]=1;
     }
  }
  return obj;

}
console.log(countAllCharacters('paralelepipedo'));
