function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function (x, y) {
        return x - y;
    });
    return arr.indexOf(num);
}
console.log(getIndexToIns([40, 60,11,8], 50));
