/*
you need to match a time value such as 12:00:32.
which regular expression would work for your code?

/[^0-9]+:[^0-9]+:[^0-9]+/

/[0,9]{2,}:[0,9]{2,}:[0,9]{2,}/

/\d\d:\d\d:\d\d/ - OK (https://regex101.com)

/:/:/

 */

/*
    /    \d\d:\d\d:\d\d     /

    \d matches a digit (equal to [0-9])
    \d matches a digit (equal to [0-9])
    : matches the character : literally (case sensitive)
    \d matches a digit (equal to [0-9])
    \d matches a digit (equal to [0-9])
    : matches the character : literally (case sensitive)
    \d matches a digit (equal to [0-9])
    \d matches a digit (equal to [0-9])
 */


const time = '12:00:32'
console.log(typeof (time))

let re1 = /[^0-9]+:[^0-9]+:[^0-9]+/
let re2 = /[0,9]{2,}:[0,9]{2,}:[0,9]{2,}/
let re3 = /\d\d:\d\d:\d\d/
// let re4 = /:/:/


console.log(re1, re1.test(time))
console.log(re2, re1.test(time))
console.log(re3, re1.test(time))


/*
Commonly used Regex
https://digitalfortress.tech/tricks/top-15-commonly-used-regex/
 */