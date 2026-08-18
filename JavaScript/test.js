function fibonacci(sequence,length){
let i=sequence;
while(i.length<length){
let j=i.slice(-2).reduce((sum,num)=>sum+num);
i.push(j);
}
return i.slice(0,length);

}

const result = fibonacci ([0,1],10);

console.log(result);
