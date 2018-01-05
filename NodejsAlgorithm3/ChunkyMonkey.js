function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arr1 = [];
    var len = arr.length / size;
    for (var i = 0; i < len; i++) {

        arr1.push(arr.splice(0, size));
    }

    return arr1;

}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

