function find_total(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 5){
            sum +=5
        } else if (arr[i] %2 ==1 ) {
            sum+=3
        } else {
            sum+=1
        }
    }   
    return sum
}


console.log(find_total([17,19,21]))