function isPangram(sentence,letters){
let lowersentence = sentence.toLowerCase();
let onlyalphabets = [];

for(let i=0; i<lowersentence.length; i++){
    let y=lowersentence[i].toLowerCase()
    if(/[a-z]/.test(y)){
        onlyalphabets.push(y);
    }
}

let char = new Set(onlyalphabets);

for (let j=0; j<letters.length;j++){
let x=letters[j].toLowerCase();
if (!char.has(x)){
    return false;
}
}
let lowerlettercase = letters.toLowerCase();
for (var c of char){
    if (!lowerlettercase.includes(c)){
        return false
    }
}
return true; 
}

console.log(isPangram("Hello World","Helowrd"));