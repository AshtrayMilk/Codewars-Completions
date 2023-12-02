function pigIt(str){
    let noword = /\W/
    return str.split(" ").map(
        word => {
            if(!word.match(noword)){
                return (
                    word.slice(1,)+
                    word[0]+"ay"
                )
            }else{
                return word
            }  
        }
    ).join(" ")
}