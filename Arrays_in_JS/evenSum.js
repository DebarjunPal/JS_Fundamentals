function sumEven(array) {
    let even_sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            even_sum += array[i];
        }
    }
    return even_sum;
}

module.exports = sumEven;