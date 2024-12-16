
function areRotations(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
   
    let s1s1 = s1 + s1;

    for(let i = 0; i<s1s1.length; i++){
        if(s1s1[i] == s2[0]){
            let j = 1;
            while(j < s2.length){
                if(s1s1[i+j] != s2[j]){
                    break;
                }
                j++;
            }
            if(j == s2.length){
                return true;
            }
        }
    }
    return false
}



let s1 = "aab";
let s2 = "aba";

console.log(areRotations(s1, s2));
