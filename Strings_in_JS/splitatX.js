function splitAtX(string) {
    const index = string.indexOf('x');
    const a = string.slice(0,index);
    const b = string.slice(index+1);
    return (a.length > b.length) ? a : b;
}

module.exports = splitAtX;