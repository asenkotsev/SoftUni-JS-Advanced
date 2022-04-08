function arrayMap(arr, map) {
     return arr.reduce(function (acc, curr) {
        return acc.concat(map(curr));
    }, [])
}

let nums = [1,2,3,4,5];
console.log(arrayMap(nums,(item)=> item * 2));