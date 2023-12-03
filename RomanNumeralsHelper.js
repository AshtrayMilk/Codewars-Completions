var numeralsTable = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1]
];

RomanNumerals = {
  toRoman: function(normal) {
    var romans = '';
    numeralsTable.forEach(function(n) {
      while (normal >= n[1]) {
        romans += n[0];
        normal -= n[1]; 
      }
    });
    return romans;
  },
  fromRoman: function(romans) {
    var normal = 0;
    numeralsTable.forEach(function(n) {
      while (romans.substr(0, n[0].length) == n[0]) {
        romans = romans.substr(n[0].length);
        normal += n[1];
      }
    });
    return normal;
  }
};