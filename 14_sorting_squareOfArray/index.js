function sortedSquares(arr){
    let squareArray = []
    for(let i=0;i<arr.length;i++) {
        squareArray.push(arr[i]*arr[i])
    }
    squareArray.sort((a,b)=> {
        return a-b
    })
    return squareArray
}

console.log(sortedSquares([-2,-1,0,1,2,3,4]) )