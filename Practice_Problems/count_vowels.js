const vowels = ["a", "e", "i", "o", "u"];

function countVowels(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i].toLowerCase())) count++;
    }

    return count;
}

module.exports = countVowels;