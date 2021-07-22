/* function largestOfOne(arr){
    return arr.sort(function(a,b){return b-a})[0]
}

console.log(largestOfOne([2,45,5,67])) */


/* function largestOfFour(arr){
    let largests =[]
    for (let i = 0;i<=arr.length-1;i++){
        console.log(i.sort(function(a,b){return b-a})[0])     
    }
    
}

console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]])) */


// First Solution
/* function largestOfFour(arr){
    let maxes = []
    for (let i=0;i<=arr.length-1;i++){
        let tempMax = arr[i][0]
        for (let j=0;j<=arr[i].length-1;j++){
            let currentElement = arr[i][j];
            if(currentElement>=tempMax){
                tempMax = currentElement;
            }
        }
        maxes.push(tempMax)
    }
    return maxes
}

console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]])) */

//[5,27,39,1001]


//Second Solution
/* function largestOfFour(arr){
    let maxes = [0,0,0,0]
    for (let i=0;i<=arr.length-1;i++){
        for (let j=0;j<=arr[i].length-1;j++){
            let currentElement = arr[i][j];
            if(currentElement>=maxes[i]){
                maxes[i]= currentElement
            }
        }
    }
    return maxes
}

console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]])) */


//Third Solution
/* function findMax(arr){
    let max = arr[0]
    for(let i=0;i<arr.length;i++){
        if (arr[i]>max) max = arr[i]
    }
    return max;
}

function largestOfFour(arr){
    let maxes = [];
    for (let i=0;i<arr.length;i++){
        let innerMax = findMax(arr[i])
        maxes.push(innerMax)
    }
    return maxes;
}

console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]])) */
