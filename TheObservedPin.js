pinAlterations = {
    "1": ["1", "2", "4"],
    "2": ["2", "1", "5", "3"],
    "3": ["3", "2", "6"],
    "4": ["4", "1", "5", "7"],
    "5": ["5", "4", "2", "6", "8"],
    "6": ["6", "3", "5", "9"],
    "7": ["7", "4", "8"],
    "8": ["8", "5", "7", "9", "0"],
    "9": ["9", "6", "8"],
    "0": ["0", "8"]
}

function getPINs(observed) {
    arr = observed.split("");
    //console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
        arr[i] = pinAlterations[arr[i]]
    }
    //console.log(arr);
    let result = cartesian.apply(this, arr);
    let complete = []
    for(let i = 0; i < result.length; i++)[
        complete.push(result[i].join(""))
    ]
    return complete;

}

function cartesian(...args) {
    var r = [], max = args.length-1;
    function helper(arr, i) {
        for (var j=0, l=args[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(args[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}



let result = getPINs("369");
result.sort();
console.log(result);


let correct = ["339","366","399","658","636",
"258","268","669","668","266",
"369","398","256","296","259",
"368","638","396","238","356",
"659","639","666","359","336",
"299","338","696","269","358",
"656","698","699","298","236",
"239"]
correct.sort();
console.log(correct)