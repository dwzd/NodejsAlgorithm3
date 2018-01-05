function destroyer(arr) {
    var arr1 = arguments;
    for (var i = 1; i <= arr1.length; i++) {
         arr = arr.filter(function (va) {
            return arr1[i] !== va;
        });
    }
    return arr;
}
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
