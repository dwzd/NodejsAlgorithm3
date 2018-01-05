function slasher(arr, howMany) {

    arr.splice(0, howMany);
    return arr;
}
console.log(slasher(["burgers", "fries", "shake"], 1));
