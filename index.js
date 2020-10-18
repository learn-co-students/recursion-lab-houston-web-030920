// Code your solution here!
function printString(string) {
    console.log(string[0]);

    if (string.length > 1) {
        let substring = string.substring(1, string.length);
        printString(substring);
    } else {
        return true;
    }
}

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}

function isPalindrome(str) {
    let len = str.length;

    if (len < 2) {
        return true;
    } else if (str[len - 1] === str[0]) {
        return isPalindrome(str.substring(1, len - 1));
    } else {
        return false;
    }
}

function addUpTo(arr, index) {
    return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

function maxOf(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return Math.max(arr.pop(), maxOf(arr));
    }
}

function includesNumber(arr, num) {
    if (!arr.length) {
        return false;
    } else if (arr[0] === num) {
        return true;
    } else {
        return includesNumber(arr.slice(1), num);
    }
}
