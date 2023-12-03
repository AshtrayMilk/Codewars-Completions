function accum(s) {
    let result = [];
    for(let letter in s){
        let letterString = s[letter].toUpperCase();
        letterString += s[letter].repeat(letter).toLowerCase();
        console.log(letterString);
        result.push(letterString);
    }
    return result.join("-");
}
let result = accum("dfk");
console.log(result)