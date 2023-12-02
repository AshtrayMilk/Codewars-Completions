function isValidWalk(walk) {
    let x = 0
    let y = 0
    let minutes = 0
    for(let i = 0; i < walk.length; i++){
        switch(walk[i]){
            case "n": y++; break;
            case "s": y--; break;
            case "e": x++; break;
            case "w": x--; break;
        }
        minutes++
    }
    if(minutes == 10 && x == 0 && y == 0){
        return true
    }else{
        return false
    }
}