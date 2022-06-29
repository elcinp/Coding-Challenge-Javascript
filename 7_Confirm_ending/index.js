function confirmEnding(str,target){
    return str.endswith(target)
}
console.log(confirmEnding(str));

/* str="I'm just a singer"
console.log(str.substr(7));
console.log(str.slice(7,10)); */

//Solution without endswith()

// function confirmEnding(str, target) {
//     let len = target.length
//     if(str.slice(str.length-len,str.length)==target){
//       return true 
//     }else {
//       return false
//     }
  
//   }