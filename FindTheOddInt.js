function findOdd(arr) {
    let sets = new Set(arr)
    sets = Array.from(sets);
    for(let item of sets){
        //console.log(item)
        let itemCount = arr.filter(x => x==item).length
        if(itemCount % 2 != 0){
            return item
        }
    }
    return null
}