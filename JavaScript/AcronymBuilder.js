function acronymBuilder(str){
let textBlocks = str.split(" ");
let y = []
    for (let i=0; i<textBlocks.length; i++){
     let x = [...textBlocks[i]]
     let ignore = ["a","for","an","and","by","of"];
     let word=textBlocks[i].toLowerCase();
     if (ignore.includes(word) && i!==0){continue;}
     y.push(x[0]);
     }
let acr = y.join('');
  return acr.toUpperCase();  
}
 


console.log(acronymBuilder("For Your Information"));