String.prototype.camelCase=function(){
    console.log(this)
      if(this == ""){
          return ""
      }
      return this.split(" ").map(
          word =>
              word[0].toUpperCase()+
              word.slice(1,).toLowerCase()
      ).join("")
}