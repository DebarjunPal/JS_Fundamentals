function checkNumber(num) {
    if(num>0)
    {
        return 'positive';
    }
    if(num<0)
    {
        return 'negative';
    }
    else
    {
        return 'zero';
    }
}
module.exports = checkNumber;