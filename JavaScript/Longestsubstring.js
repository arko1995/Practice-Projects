var lengthOfLongestSubstring = function(s) {

let lastSeen = {};
let left = 0;

let totalLength = 0;

for(let right=0; right<s.length; right++){
    let characters = s[right];

    if(lastSeen[characters]!== undefined && lastSeen[characters]>=left){

        left = lastSeen[characters]+1;
    }

    lastSeen[characters]=right;

const currentlength = right - left + 1;
if(currentlength>totalLength){
    totalLength=currentlength;
}

}


return totalLength;
};

console.log(lengthOfLongestSubstring("dowedowqraasgadaadfhsdfasdavdagasdf"));