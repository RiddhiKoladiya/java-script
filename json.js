// ==
var y = false
if (y == 0) {
    console.log("this is from if")  //ans this is from if as it takes value
}                                    //like false=0,true=1;
else {
    console.log("this is from else")
}

// === 
var x = false;
if (x === 0) {
    console.log("this is from if");
}
else {
    console.log("this is from else")      //ans = this is from else because
    //it takes data type x is false so that                       
}
//type of
console.log(typeof (x));

//if else true fales trarnary oprator
(true) ? console.log("ans true") : console.log("ans False");


// json array
var a = {
    "index": "1",
    "name": "riddhi",
    "surname": "Varsani",
    "array": { "computre": [1, 2, 3, 34, 5, 6] }
}
console.log(a);
var r = a["array"];
var q = r["computre"];
var e = q[3];
console.log(e);


// add json array
a["company"] = "weetach"
console.log(a);
//and
a.age = "30";
console.log(a);

//for in 
var forin = ["riddhi", 'gaurang', 'khusal', 'nisha', 'drumil', 'nishu'];
for (var ic in forin) {
    console.log(ic + " " + forin[ic]);
}

//floor function
var flr = Math.floor(2.3);
console.log("floor function = " + flr);  // it's return 2

//rendom function
var ren = Math.random() * 13;
console.log("rendom function = " + ren); //it givs all time difrunts value 


//floor and rendom togather
var tg = Math.floor(Math.random() * 100); //it takes value without (.) 
console.log(tg);

var a = 40;
var b = 20;
var c = 30;
var s = (a < b && a < c) ? a : ((b < a && b < c) ? b : c);
console.log(s);

//join function ,pop function ,push funtion ,sclice function
let array = ['riddhi', 'gaurang', 'khushal', 'drumil', 'nisha']
let array2 = ['nisha', 'priyal', 'manswi', 'nency', 'mitanshi']
array.pop();
console.log(array)
array.push('mohit');
console.log(array);
let ans = array.join('*');   //it replace  ' , ' to ' * '
console.log(ans)


//concate function , slice function
console.log(array.concat(array2))
let array3 = ['riddhi', 'gaurang', 'khushal', 'drumil', 'nisha']
let ans1=array3.slice(1,3)
console.log(ans1)

//splice function
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");  //it add 2nd pogition and 0 takes  
console.log(fruits)                    //not to over lape  any one

//toString function
let car=['aude','bmw','scoda','eartiga']
let convetr=car.toString();
console.log(convetr);

//min max function
let count=[1,4,3,55,8,2]
let len=count.length;
let answer=-Infinity;
while(len--)
{
    if(count[len]>answer)
    {
        answer=count[len]
    }
}
console.log(answer)


let count1=[1,2,3,5,1,2,7]
let cot=count1.length;
let min=Infinity;
while(cot--)
{
    if(count1[cot]<min)
    {
        min=count1[cot];
    }
}
console.log(min)
 


//sorting array (asending order)
let maxary=[1,3,23,3,5,7,9]
maxary.sort(function (a,b){return a-b});
console.log(maxary)

//disending order
maxary.sort(function(a,b){return b-a});
console.log(maxary);

