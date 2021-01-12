function checkIfArrayIsUnique(myArray) {
    return myArray.length === new Set(myArray).size;
}

function compress(chars) {
    let newString = "";
    let count = 1;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== chars[i + 1]) {
            newString += chars[i];
            if (count > 1) {
                newString += count;
            }
            count = 1;
        }
        else {
            count++;
        }
    }
    return newString;
}