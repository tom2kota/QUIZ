/*
what is the name of a function whose execution can be suspended ana resumed at a later point?

? Generator function

Promise function

Async/Await function

Arrow function
 */


/*
Generators are function executions that can be suspended and resumed at a later point.
Generators are useful when carrying out concepts such as 'lazy execution'.
This basically means that by suspending execution and resuming at will,
 we are able to pull values only when we need to.
https://www.guru99.com/node-js-generators-compare-callbacks.html
 */

function* Add(x) {
    yield x + 1;
    var y = yield(null);
    y = 6

    return x + y;
}

var gen = Add(5);

gen.next();

gen.next();

console.log(gen.next())