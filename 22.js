/*
what will this code print?

1

nothing - throw an error

2

undefined

 */

var v = 1;

var f1 = function () {
    console.log(v)
}

var f2 = function () {
    var v = 2;

    f1();
}

f2()