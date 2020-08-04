/*
after the following code, what is the value of a.length?

[ 'dog', 'cat', 'hen', <97 empty items>, 'fox' ]
101

 */

var a = ['dog', 'cat', 'hen']
a[100] = 'fox'

console.log(a)
console.log(a.length)