function endswithX(string) {
    if(string[string.length - 1].toLowerCase === "x"){
        return true;
    }
    return false;
}
module.exports = endswithX;