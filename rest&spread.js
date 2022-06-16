//rest operoter
function person(firstname,lastname,...other){
    console.log(other);
}
person(1,2,3,4,5,6,7,8,9)


//spread 
let nam="hello world i am JS";
console.log([...nam])



//destructing object with 3 regular variabl and 1 rest oprator variable
const {first,second,third,...other1}={
                                        first:"Riddhi",
                                        second:"gaurang",
                                        third:"Koladiya",
                                        age:"24",
                                        height:"5.5"
                                    }
 console.log(first,other1)


 //destructing array with 2 regular variable and 1 rest opretor
 const [one,two,...other3]=["barry","appel","bunana","pineapple","strobarry"];
 console.log(other3);

 //spread string
let keyvalue="hello weetach";
console.log([...keyvalue])

//concat in rest
let r=[1,2,3,4,5,6,7];
function sum(f,s){
s=17;
return f+s;
}
console.log(sum(...r));


//find value
const value="Riddhi Ashvinbhai varsani";
function myname(name1,name2,...lastname){
    
    return name1+name2+lastname;

}
console.log(myname(...value));
console.log(myname([...value]));
console.log(myname(...value[3]));
console.log(myname({...value}));

//add variable;

let halfname=["Riddhi","Gaurang","koladiya"];
let fullname=["hello","my name is",...halfname,"nice to meet you"];
console.log(fullname)
