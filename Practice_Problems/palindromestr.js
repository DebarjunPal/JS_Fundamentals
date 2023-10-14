function isPalindrome(string) {
    return string === reverse(string);
}

function reverse(string) {
    let newStr = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }

    return newStr;
}

module.exports = isPalindrome;