function repeatVowels(str){
const newStr = [...str.toLowerCase()];
let vowel = ["a","e","i","o","u"];
let result = "";
let vowelCount= 0;
for(let i=0; i<newStr.length; i++){
    const char = str[i];
    if(vowel.includes(newStr[i])){
        vowelCount++;
        result += char;
        result += newStr[i].repeat(vowelCount-1);
    }
    else {
        result += char;
    }
}
return result;
};

console.log(repeatVowels("hello world"));