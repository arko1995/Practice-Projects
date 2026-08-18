
var canBeTypedWords = function(text, brokenLetters){

    let textBlock = text.split(" ");
    let brokenCharacters = brokenLetters.split("");
    let count = 0;
    for(let i=0; i<textBlock.length; i++){
        let cantype = true;

        for(let j=0; j<brokenCharacters.length; j++){           
        if(textBlock[i].includes(brokenCharacters[j])){         
            cantype=false;
            break;
        }
    }
    
      if(cantype){
        count++;

      }
        
    }

    return count;
}

console.log(canBeTypedWords("Hello World", "o"))

