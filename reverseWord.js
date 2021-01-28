/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arrayWord = string_to_array(s);
    var reverseArray = arrayWord.reverse();
    var reverseString = array_to_string(reverseArray);
    return reverseString;
};
    
var string_to_array = function (str) {
     return str.trim().split(" ");
};

var array_to_string = function (str) {
     return str.join(" ");
};