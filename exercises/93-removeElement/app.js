var removeElement = (array,discarder) =>{
var newarr = array.filter(function(cv, i, a){
if ((array == []) || (cv == discarder)) {
return [];
} else if (cv != discarder ) {
return  cv;
} 
});
return newarr;
  }
