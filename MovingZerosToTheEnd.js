function moveZeros(arr) {
    for(let i = arr.length; i >= 0; i--){
      if(arr[i] === 0){
        let item = arr.splice(i,1)
        arr.push(0)
      }
    }
    return arr
}