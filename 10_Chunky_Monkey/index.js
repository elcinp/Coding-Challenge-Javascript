function chunkArrayInGroups(arr,size) {
    //Break it up
    let groups = [];
    while (arr.length>0) {
        groups.push(arr.slice(0,size))
        arr = arr.slice(size);
    }

    return groups;
}

chunkArrayInGroups(["a","b","c","d"],2);

//with splice method

function chunkArrayInGroups(arr,size) {
    //Break it up
    let groups = [];
    while (arr.length>0) {
        groups.push(arr.splice(0,size))
        // arr = arr.slice(size);
    }

    return groups;
}

chunkArrayInGroups(["a","b","c","d"],2);

