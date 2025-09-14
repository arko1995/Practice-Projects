function parseRomanNumeral(numeral) {
const values = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
};

let total = 0;

for(i=0; i<numeral.length; i++){
    let current = values[numeral[i]];
    let next = values[numeral[i+1]];


if(next && current < next){
    total += next-current;
    i++;
}
else{
    total += current; 
}
}
  return total;
}

console.log(parseRomanNumeral("VVV"));