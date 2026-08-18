function isValidIPv4(ipv4){
const ipNumber = ipv4.split(/\./);
if (ipNumber.length!==4) return false;
for (let i=0; i<ipNumber.length; i++){
    if(!/^\d+$/.test(ipNumber[i])) return false;
  let numberBlock = parseInt(ipNumber[i],10);
    if(numberBlock<0 || numberBlock>255) return false;
    if (ipNumber[i].length>1 && ipNumber[i][0]==="0") return false;
}
return true;
}

console.log (isValidIPv4("255.00.50.111"));