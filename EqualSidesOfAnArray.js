function findEvenIndex(arr)
{
    for(let i = 0; i < arr.length; i++){
        let left = arr.slice(0, i).reduce((a, b) => a + b, 0);
        let right = arr.slice(i+1,).reduce((a, b) => a + b, 0);
        console.log(left);
        console.log(right);
        console.log("-----")
        if(left == right){
            return i;
        }
    }
    return -1;
}




let result = findEvenIndex([1,2,3,4,3,2,1]);
console.log(result);