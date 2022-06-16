let x=0;
async function hello(){

    let mypromis=new Promise((res,rej)=>{
       setTimeout(()=>{
        x=100;
        if(x!==10){
            rej("you are rejected ")
        }
        else{
            res("your risponce is ")
        }
        },3000)
        // res(x);
    })
    await mypromis;
    return x;
}
let w=hello();
w.then(()=>{
    console.log(w)

 }).catch(()=>{
     console.log(w);
 });
console.log(x);
