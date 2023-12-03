powersOfWhat = {
    0: [0n],
    1: [1n],
    2: [4n,8n,6n,2n],
    3: [9n,7n,1n,3n],
    4: [6n,4n],
    5: [5n],
    6: [6n],
    7: [9n,3n,1n,7n],
    8: [4n,2n,6n,8n],
    9: [9n,1n]
}
//aight pretty convinced that javascripts ability to handle big numbers is the reason again
var lastDigit = function(str1, str2){
    if(str2 == "0"){
        return 1
    }
    let str1_lastdigit = BigInt(str1[str1.length-1])
    let rollArr = powersOfWhat[str1_lastdigit];
    //console.log(str1[str1.length-1])
    let startIndex = rollArr.indexOf(str1_lastdigit);
    let finalIndex = (BigInt(startIndex)+BigInt(str2)-BigInt(1))%BigInt(rollArr.length);
    console.log(rollArr)
    console.log(str1_lastdigit)
    console.log(startIndex)
    console.log(finalIndex)
    console.log(str1, str2);
    return parseInt(rollArr[finalIndex]);
}



let result = lastDigit("9", "7")
console.log(result)
console.log(Math.pow(9, 7))


