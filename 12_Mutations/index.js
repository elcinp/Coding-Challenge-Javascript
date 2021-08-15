function mutation(arr) {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();

    // for (let i= 0;i<secondWord;i++) {
    //     if (firstWord.indexOf(secondword[i]) === -1) return false
    // }

    // for (let letter of secondWord) {
    //     if(firstWord.indexOf(letter) === -1) return false;
    // }

    for (let letter of secondWord) {
        if(!firstWord.includes(letter)) return false;
    }

    return true;
}

;
console.log(mutation(["hello","hey"]))
console.log(mutation(["Alien","line"]))