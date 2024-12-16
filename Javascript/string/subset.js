function isSubset(s1, s2) {
    
    const getCharFrequency = (str) => {
        const freq = {};
        for (const char of str) {
            freq[char] = (freq[char] || 0) + 1;
        }
        console.log(freq);
        return freq;
    };

    // Get frequency maps for s1 and s2
    const freqS1 = getCharFrequency(s1);
    const freqS2 = getCharFrequency(s2);

    // Check if all characters in s2 are available in s1
    for (const char in freqS2) {
        if (!freqS1[char] || freqS2[char] > freqS1[char]) {
            return false; // s2 is not a subset of s1
        }
    }

    return true; // s2 is a subset of s1
}


const s1 = "abcd";
const s2 = "acbd";
console.log(isSubset(s1, s2)); // Output: true
