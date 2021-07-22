function findLongestWord (){
    let str = prompt("Enter a sentence : ")
    let longest = ""
    let words = str.split(" ")
    for (let i=0;i<= words.length-1;i++){
        if (words[i].length>longest.length) longest =words[i];
    }
    return longest.length;
}        
   
console.log(findLongestWord())


/* function findLongestWord(str){
    let words = str.split(" ")
    let longest = ""
    for (let i=0;i<= words.length-1;i++){
       if (words[i].length>longest.length) longest =words[i];
    }
    return longest.length;
}        
  
console.log(findLongestWord("Bugun hava cok güzel")) */



/* function findLongestWord(str) {
    return str.split(" ").sort(function(a,b) {return b.length- a.length})[0].length;
    // sorting in descending order
}

console.log(findLongestWord("bugun hava cok guzel")) */