function firstNonRepeatingLetter(s) {
    arr = s.slice().toLowerCase();
    const map = new Map();
    for (var i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        else {
            map.set(arr[i], 1);
        }
    }
    for (var i = 0; i < arr.length; i++)
        if (map.get(arr[i]) == 1)
            return s[i];
    return "";
}