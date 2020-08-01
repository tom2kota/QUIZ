let dog = {
    name: 'Tommy',
    printName() {
        console.log(this.name)
    }
}

let printName = dog.printName

printName()

console.log('--------------------------')
console.log('dog.name: ', dog.name)
console.log('this.name: ', this.name)
console.log('this: ', this)
console.log('--------------------------')

/*
*   При запуске этого кода мы видим, что вызов this.name возвращает не «Tommy», а undefined!
*   Это произошло потому, что функция printName() => отдельно от объекта dog (именно здесь функция и потеряла контекст).
*
*   https://www.programmersought.com/article/8299114386/
*   http://www.codermania.com/javascript/lesson/1r/objects
*   https://learn.javascript.ru/bind
*
*    window.name="test";
*    sayName();//test
*    Executes the function in window context so this is window. You may want to keep the dog context either through passing it:
*
*    sayName.call(dog);//doggo
*    Or through keeping a bound function:
*
*    let sayName = dog.sayName.bind(dog);
*    sayName();//doggo
*
 */