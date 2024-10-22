var concatStrings = function (a, b, c) {
    if (b === void 0) { b = "Boy"; }
    if (c === void 0) { c = "Girl"; }
    return a + b + c;
};
console.log(concatStrings("a", "b", "c"));
console.log(concatStrings("a"));
