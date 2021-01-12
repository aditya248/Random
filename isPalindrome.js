function isPalindrome(str) {
    if (str.length <= 1)
        return true;
    else {
        if (str[0] !== str[str.length - 1])
            return false;
        else
            return isPalindrome(str.substring(1, str.length - 1));
    }
}