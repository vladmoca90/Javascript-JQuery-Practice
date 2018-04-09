//A function that applies substring() to a string
function substringString(string, a, b) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    return string.substring(a, b);
}

//A function that applies substr() to a string
function substrString(string, a, b) {

    if (string.length == 0) {
        throw new Error('The string cannot be empty');
    }

    return string.substr(a, b);
}
