function repeatStringNumTimes(str, num) {
    var str1 = "";
    for (var i = 0; i < num; i++) {
       str1 = str1.concat(str);
    }

    return str1;
}
console.log(repeatStringNumTimes("abc***", 3));
