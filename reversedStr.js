function isReverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];  //
    }
    console.log(reversedStr);
}
let str = "hello"
isReverseString(str);