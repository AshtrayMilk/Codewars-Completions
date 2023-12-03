function narcissistic(value) {
    // Code me to return true or false
    let attempt = 0;
    for(digit of value.toString()){
        //console.log(digit)
        //console.log(value.length)
        attempt += Math.pow(parseInt(digit), value.toString().length);
        //console.log(attempt);
    }
    return value == attempt ? true : false;
}

let result = narcissistic(153);
console.log(result)
  