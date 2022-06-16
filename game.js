var history = {}
var arr = ['7up', '7in', '7eqal', '7up', '7in', '7eqal', '7up', '7in', '7eqal', '7up', '7in'];
var t;
var total = 40;
console.log("Start At  " + total);
for (var ise in arr) {
   var a = Math.floor(Math.random() * (2 - 13) + 13);
   if (total[ise] == '7up') {
      (a <= 7) ? total = total - 10 : total = total + 10;
   }
   else if (arr[ise] == '7in') {
      (a <= 7) ? total = total - 10 : total = total + 10;
   }
   else if (arr[ise] == '7eqal') {
      (a == 7) ? total = total + 20 : total = total - 10;
   }
   if (total == 0) {
      console.log("GAME IS OVER ! NOW YOU ARE AT 0 SCOR ");
      break;
   }
   var out = { "index": ise, 'choose': arr[ise], "dise": a, "scorAt": total }
   history[ise] = out;
}
console.log(history);
console.log("Total Scor " + total);
