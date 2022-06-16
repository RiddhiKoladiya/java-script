//call back function
function fun()
{
    console.log("hello good mornig world")
}
function get(myfun)
{
    fun();
    return "my name is java script"
}
let f=get(fun);
console.log(f);

//call back function
function print(sum){
    console.log(sum);
}
function printans(x,y,myclass){
    return total=x+y,myclass(total);
}
printans(5,6,print);
