//This is a score calculating function for the ancient greek game
//"greed". Its a dice game consisting of 5 dices

function score( dices ) {
    let scoreBoard = {
        // three occurences of specific dice number gives you scores:
        "1": 1000,
        "6": 600,
        "5": 500,
        "4": 400,
        "3": 300,
        "2": 200
        // single 5's that aint inside thrice, score 50 per dice
        // single 1's that aint inside thrice, score 100 per dice
    }
    //just an object to count each dice number occurences on a dice roll
    let dices_count = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0
    }
    //Count dices occurences
    let totalScore = 0
    for(let dice of dices){
        dices_count[dice]++
    }

    //calculate the total score
    for(let number in dices_count){
        //calculate the scores of thrices
        if(dices_count[number] >= 3){
            totalScore += scoreBoard[number]
        }
    }
  
    //calculate 1's
    totalScore +=(dices_count["1"]%3)*100
    
    //calculate 5's
    totalScore +=(dices_count["5"]%3)*50

    return totalScore;
}