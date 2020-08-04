/*
what is the result of running this code?

30
ReferenceError
30
-10


ReferenceError
-10


30
-10

30
ReferenceError

 */

sum(10, 20);
diff(10, 20);

function sum(x, y) {
    console.log(x + y)
    return x + y;
}

let diff = function (x, y) {
    return x - y
}