function greatestProduct(num){
    let greatestproduct = 0;
    for(let i = 0; i < num.length-4; i++){
        let attempt = num[i]*num[i+1]*num[i+2]*num[i+3]*num[i+4];
        //console.log(greatestproduct);
        //console.log(num[i]);
        if(attempt > greatestproduct){
            greatestproduct = attempt;
        }
    }
    return greatestproduct;
}


let result = greatestProduct("123834539327238239583")
console.log(result);