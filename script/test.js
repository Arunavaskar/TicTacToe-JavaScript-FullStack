var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

var mainArray = [
  [1, 4, 5, 6, 7],
  [0, 9, 67, 4, 3],
];

for (let index = 0; index < mainArray.length; index++) {
    let element = mainArray[index];
    let included = element.filter(value => array1.includes(value));
}

console.log(included);
