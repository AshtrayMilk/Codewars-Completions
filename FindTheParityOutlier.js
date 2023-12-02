function findOutlier(integers){
        
    let a = integers[0]%2==0
    let b = integers[1]%2==0
    let c = integers[2]%2==0

    //at least two of the boolean values need to be true for majority to be evens
    let isEven = (a && b) || (b && c) || (a && c)

    
    for(let i = 0; i < integers.length; i++){
        if(isEven){
            if(integers[i]%2 != 0){
                return integers[i]
            }
        }else{
            if(integers[i]%2 == 0){
                return integers[i]
            }
        }
    }
}