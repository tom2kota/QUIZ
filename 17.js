/*
which of the following is an incorrect way to define an arrow function that returns an empty object?

() => ({})

() => (({}))

() => { return {}; }

 () => {}

 */

let x1 = () => console.log(({}))

x1()

let x2 = () => console.log((({})))

x2()

// let x3 = () => console.log({return {}})

// x3()

let x4 = () => console.log({})

x4()
