function titleCase() {
    let sentence = prompt("Enter a sentence:")
    let words = sentence.toLowerCase().split(" ")
    for(let i = 0;i<=words.length-1;i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ")
}
console.log(titleCase())



/* function titleCase(str) {
    let titled = str.toLowerCase().split(" ").map(function(elem){
        return elem[0].toUpperCase() + elem.slice(1)
    })
    return titled.join(" ")
}

titleCase("I'm a little tea pot") */



/* function titleCase(str) {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log(titleCase("I'm a little tea pot")); */
