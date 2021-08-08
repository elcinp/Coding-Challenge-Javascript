function repeatStringNumTimes(str,num) {
    if(num<0) return ""
    let repeatedStr = ""
    for (let i=0;i<num;i++) {
        repeatedStr += str
    }
    
    return repeatedStr;
}
console.log(repeatStringNumTimes("hello",3))



// function repeatStringNumTimes(str,num) {
//     if (num<0) return "";
//     return str.repeat(num);
// }

// console.log(repeatStringNumTimes("hello",1));


// function repeatStringNumTimes(str,num){
//     if(num<0) return "";
//     if(num === 1) return str;
//     return str + repeatStringNumTimes(str,num-1)
// }
