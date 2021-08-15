function mutation(arr) {
    let firstWord = arr[0];
    let secondWord = arr[1];

    for (let i= 0;i<secondWord;i++) {
        if (firstWord.indexOf(secondword[i]) === -1) return false
    }
    return true;
}

;
console.log(mutation(["hello","hey"]))