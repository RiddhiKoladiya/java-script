//foreach with object
let  x={
    "riidhi":24,
    "nisha":23,
    "nency":19,
    "priyal":26,
    "mansvi":24
}
Object.keys(x).forEach(function(key){
    console.log(key,x[key])

})



//set() function
let st=new Set([1,2,3,4,5,5,4,3,2]);
console.log(st);
st.add(6);
st.add(7);
console.log(st);
st.forEach(print);
function print(i)
{
   
    console.log(i);
}

// map() function
let mp=new Map();
mp.set(["car","bmw"],
["language","c"],
["fruit","watermallon"])
console.log(mp)
alert("prass hear");