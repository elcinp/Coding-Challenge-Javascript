function MathChallenge(num1,num2) { 
    let result = (num1/num2).toString().split(".")
    let first = result[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")
    let second;
    if(result[1] === undefined){
      second = "0000"
    } else if (result[1].length === 4){
      second = result[1]
    } else if(result[1].length<4){
      let x = 4-result[1].length
      for(let i=0;i<x;i++){
        result[1] += "0"
      }
      second = result[1]
    } else{
      second = result[1].slice(0,4)
    }
    return first + "." + second; 
  }