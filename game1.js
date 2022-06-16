let ary = ['7up', '7in', '7eq', '7up', '7in', '7eq', '7up', '7in', '7eq', '7in'];
let scor = 50;
for (let i in ary) {
    let dise = Math.floor(Math.random() * (2 - 13)) + 13
    switch (ary[i]) {
        case '7up':
            (dise >= 7)?scor += 10:scor -= 10;
             break;
        case '7in':
           (dise <= 7)?scor += 10:scor -= 10;
            break;
        case '7eq':
           (dise == 7)? scor += 20:scor -= 20;
            break;
    }
    if(scor<=0)
    {
        console.log("GAME IS OVER ! AND YOUR SCOR AT 0");
        break;
    }
    let ans = {
        "index": i, "choice": ary[i], "dise": dise, "scor": scor
    }
    console.log(ans);
}