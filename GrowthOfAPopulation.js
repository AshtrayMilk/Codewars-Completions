
function nbYear(p0, percent, aug, p) {
    let yearCounter = 0;
    let currentYearPopulation = p0
    while(true){
        if(currentYearPopulation >= p){
            return yearCounter
        }else{
            currentYearPopulation = Math.floor(currentYearPopulation*(1+(percent/100))) + aug
            console.log(currentYearPopulation)
            yearCounter++
        }
    }
}