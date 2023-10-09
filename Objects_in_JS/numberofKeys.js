function numberOfKeys(object) {
    count_key = 0;
    for(let key in object){
        count_key++;
    }
    return count_key;
}

module.exports = numberOfKeys;