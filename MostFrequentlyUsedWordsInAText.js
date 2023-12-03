function topThreeWords(text) {
    console.log(text)
    let wordArray = text.split(/[^a-z']+/i);
    wordArray = wordArray.filter(item => item != "" && item != "'")
        .map(item => item.toLowerCase())

    var freqMap = {};
    wordArray.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });
    console.log(freqMap)
    
    var items = Object.keys(freqMap).map(function(key) {
        return [key, freqMap[key]];
    });
      
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    return items.slice(0, 3).map(item => item[0]);
}


topThreeWords("In a village wont won't of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lancein the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.");
topThreeWords("'");