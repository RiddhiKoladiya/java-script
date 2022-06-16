//call back function
function print(sum){
    console.log(sum);
}
function printans(x,y,myclass){
    return total=x+y,myclass(total);
}
printans(5,6,print);


//filter function
let array=[1,43,2,3,46,89];
let fun=array.filter((age)=>{
    return age>=45;
})
console.log(fun);

//map function
let ar=[1,2,4,5,3,8];
let ans=ar.map((value,index,number)=>{
    return value*10;
});
console.log(ans);

//tempalte literals
let nam="riddhi"
console.log(`my name is ${nam}`);
//or
let pro="program";
let nm="riddhi"
let literal={
    [`${pro}`]:"java script",
    "name":[`${nm}`]
}
console.log(literal);

//reduce function
let number=[1,3,4,6];
let number_array=number.reduce(myfun)

function myfun(value){
    return value+10;
}
console.log(number_array)


