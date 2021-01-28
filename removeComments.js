/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
    var removeSource = [];
    var block = false;
    var j = 0;
    for (let str of source) {
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
            if (!block && str[i] == '/' && i + 1 < str.length && str[i + 1] == '*') {
                block = true;
                i++;
            }
            else if (block && str[i] == '*' && i + 1 < str.length && str[i + 1] == '/') {
                block = false;
                i++;
            }
            else if (!block && str[i] == '/' && i + 1 < str.length && str[i + 1] == '/') {
                break;
            }
            else if (!block) {
                newStr += str[i];
            }
        }
        if (!block && newStr.length > 0) {
            removeSource[j] = newStr;
            j++;
        }
    }
    return removeSource;
};