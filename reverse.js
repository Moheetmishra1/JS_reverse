let nam = prompt("Enter a sentence:");
let rev=""
var l= nam.length;
for(var i=l-1;i>=0;--i){
   rev+=nam[i];
}
console.log(rev);