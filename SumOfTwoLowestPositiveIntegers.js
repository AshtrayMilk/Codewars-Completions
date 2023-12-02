function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((item, next) => item - next)
    //blerberberber
    return numbers[0]+numbers[1]
}