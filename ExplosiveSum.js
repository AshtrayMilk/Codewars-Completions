function sum(num){
    let partition_parts = []
    partition_parts[0] = 1
    for (let i = 1; i<num+1 ; i++) {
        partition_parts[i] = 0
    }
    let counter = 0
    for (let i = 1; i < num+1; i++) {
        counter = 0
        for (let j = i; j < num+1; j++) {
        partition_parts[j] += partition_parts[counter]
        counter++
        }
    }
    return partition_parts[num]
}