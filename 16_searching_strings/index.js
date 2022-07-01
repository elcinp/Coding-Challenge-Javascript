//Bir string içerisindeki  sayıları bulup toplamını bulma
// Mesela "75hello 8"
// Output: 83

function searchingStrings(str) {
    var matches = str.match(/\d+/g)
    sum = 0
    for (let i=0;i<matches.length;i++){
        sum +=parseInt(matches[i])
    }
    return sum;
}
console.log(searchingStrings("75hello5"));
// searchingStrings("75hello50")