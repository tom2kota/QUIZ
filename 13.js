/*
which variable is an implicit parameter for every function in JavaScript?

argsArray

args

? arguments

argumentsList

 */

/*

Объект arguments — это подобный массиву объект, который содержит аргументы, переданные в функцию.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/arguments

Неявные параметры (implicit parameters)
 */

// While this is fairly common knowledge arguments is less so. In any function arguments is there, allowing you to call parameters in an array. This works even if there isn’t anything declared as a parameter. For example:
function argumentTest() {
    return arguments.length
}

console.log(argumentTest(0, 1, 2, 3))