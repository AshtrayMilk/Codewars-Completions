function digitalRoot(n) {
    let nums = n.toString()
    let digitsSum = 0
    for(let i = 0; i < nums.length; i++){
        digitsSum += Number(nums[i])
    }
    if(digitsSum >= 10){
        return digitalRoot(digitsSum)
    }else{
        return digitsSum
    }
} 