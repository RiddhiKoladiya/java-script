let usercurrency = 46;
count(usercurrency);
function count(crnc) {
    let array = [10, 20, 50, 100, 200, 500, 2000];
    let convert = [];
    for(i=0;i<array.length;i++)
    {
        convert[i]=array[i]
    

    if(crnc>=2000){
        convert[i]=array[i]
     }
     else if(crnc<2000 && crnc>=500)
     {
         i-=1;
         convert[i]=array[i];
     }
     else if(crnc<500 && crnc>=200){
        i-=2;
        convert[i]=array[i];
     }
     else if(crnc<200 &&crnc>=100){
         i-=3;
         convert[i]=array[i];
     }
     else if(crnc<100 && crnc>=50){
         i-=4;
         convert[i]=array[i];
     }
     else if(crnc<50 &&crnc>=20){
        i-=5;
        convert[i]=array[i];
    }    
    else if(crnc<20 && crnc>=10){
        i-=6;
        convert[i]=array[i];
    }  
    else{
        convert="invalid price"
    }
    }
    console.log(convert)
}
























































    //     {                                           

//     if (crnc > 2000) {
//         // for (let i = 0; i < array.length; i++) {

//             convert[i] = array[i];
//         // }
//     }
//     else if (crnc < 2000 && crnc >= 500) {
//         // for (let i = 0; i < array.length - 1; i++) {
//             convert[i-1] = array[i-1];
//         // }
//     }
//     else if (crnc < 500 && crnc >= 200) {
//         // for (let i = 0; i < array.length - 2; i++) {
//             convert[i-2] = array[i-2];
//         // }
//     }

//     else if (crnc < 200 && crnc >= 100) {
//         // for (let i = 0; i < array.length - 3; i++) {
//             convert[i-3] = array[i-3];
//         // }
//     }

//     else if (crnc < 100 && crnc >= 50) {
//         // for (let i = 0; i < array.length - 4; i++) {
//             convert[i-4] = array[i-4];
//         // }
//     }
//     else if (crnc < 50 && crnc >= 20) {
//         // for (let i = 0; i < array.length - 5; i++) {
//             convert[i-5] = array[i];
//         // }
//     }

//     else if (crnc < 20 && crnc >= 10) {
//         // for (let i = 0; i < array.length - 6; i++) {
//             convert[i] = array[i];
//         // }
//     }
//     else {
//         convert = "invalid value";
//     }


    
// }
// console.log(convert)
// }