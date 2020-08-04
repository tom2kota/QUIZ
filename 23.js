/*
what will this code print?

1

nothing - throw an error

2

undefined

 */

const v = 1;

const f1 = function () {

    console.log(v)

    console.log('f1() running ... with v: ', v)
};

const f2 = function () {
    const v = 2;

    console.log('f2() running ... with v: ', v)

    f1();
};

f2()