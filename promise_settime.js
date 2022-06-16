//setout
let m=4;
let proms=new Promise((rs,rj)=>{
    setTimeout(()=>{
        m=5;
        console.log(m," out side of function ")

    },2000);
    setTimeout(()=>{
        if(m==54){
            let y="this is  54 "
            rs(y);
        }
        else{
            let p="this is not 54 "
            rj(p);
        }
        let fun=map(()=>{
            
        })
    },4000);
})
proms.then((e)=>{
    console.log("promish is solve because ",e)
}).catch((q)=>{
    console.log("promish is reject  because ",q)
})