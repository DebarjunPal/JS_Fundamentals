function sumTogether(arr1, arr2) {
    let newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        const sum = arr1[i] + arr2[i];
        newArr.push(sum);
    }

    return newArr;
}

module.exports = sumTogether;