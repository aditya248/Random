items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});


function isBigEnough(value) {
  return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)


let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
    arr[index+1] +=' extra'
    console.log(index+1, arr[index+1] );
  return word.length < 6
})

console.log(modifiedWords)

myMultiplier.forEach(function multiply(item, index, myMultiplier){
myMultiplier[index] = item * 2
})