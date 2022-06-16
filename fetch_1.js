import fetch from "node-fetch";

async function person(){
    let url=await fetch("https://calendarific.com/api/v2/holidays?api_key=61879dafb41249480fdcc8964deaea87fb0aa9a1&country=ca&year=%272022%27://reqres.in/api/users")
    let ans=await url.json();
    return ans;
}
let w=person();
//let x=w["data"];
w.then(()=>{
    console.log(w);
}).catch(()=>{
    console.log("invelid");
}) 

