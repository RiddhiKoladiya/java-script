//simpal 
let x=1;
let promishe=new Promise((res,rej)=>{
if(x==0)
{
    res("canform");
}
else{
    rej("regect");
}
})
promishe.then(
           function(value) {console.log(value);},
          function(error)  {console.log(error);}
          )


//or

let prom=new Promise((resp,rejc)=>{
  x=40;
    if(x==90){
        let w=" x==90 ";
        resp(w);
    }
    else{
        let y=" x!=90 ";
        rejc(y);
    }
})
prom.then((i)=>{
    console.log("promis is solve because",i,"it is ",x)
}).catch((y)=>{
    console.log("promis is reject because",y,"it is ",x)

})


