function humanReadable (seconds) {
    let h = (Math.floor(seconds/3600))
    let m = ((Math.floor(seconds/60) % 60))
    let s = seconds % 60
    
    return ""+
         String(h).padStart(2, "0")
    +":"+String(m).padStart(2, "0")
    +":"+String(s).padStart(2, "0") 
}