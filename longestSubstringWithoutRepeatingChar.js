function longestSubstring(str) {

  let startIndex = 0, max = 0;
  let map = new Map();

  for(let i=0; i<str.length; i++) {
    let char = str[i];
    if(map.get(char)>= startIndex){
      startIndex = map.get(char) + 1;
    }
    map.set(char, i);
    if(i-startIndex+1 > max){
      max = i-startIndex+1;
    }
  }
  return max;
}