function persistence(num) {
    let num_s = num.toString()
    let roundCounter = 0
    
    while(true){
        if(num_s.length == 1){
            break
        }

        let mul = 1
        for(let c of num_s){
            mul *= Number(c) 
        }
        num_s = mul.toString()
        roundCounter++
    }
    return roundCounter
}