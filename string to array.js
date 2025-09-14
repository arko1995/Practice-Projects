function stringToArray(rgb){
const [a,b,c]=rgb.match(/\d+/g).map(Number);

function x (v){
   return Math.max(0, Math.min(255, v|0));
}

const y = "#" + [a,b,c]
.map(x)
.map (function(n){
   const z = n.toString(16).padStart(2,"0");
   return z;
})
.join("")
.toLowerCase()

return y;
}

console.log(stringToArray("rgb(1,11,111)"));

