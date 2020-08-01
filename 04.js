let dog = {
    name: 'Tommy',
    printName() {
        console.log(this.name)
    }
}

let printName = dog.printName.bind(dog)

 printName()

/*
    Решение 2: привязать контекст с помощью bind
    В современном JavaScript у функций есть встроенный метод bind, который позволяет зафиксировать this.

    Базовый синтаксис bind: let boundFunc = func.bind(context);

    Результатом вызова func.bind(context) является объект, который вызывается как функция и
    передаёт вызов в func, при этом устанавливая this=context.

    Другими словами, вызов boundFunc подобен вызову func с фиксированным this.

   В строке (let printName = dog.printName.bind(dog)) мы берём метод dog.printName и привязываем его к dog.
   Теперь  printName – это «связанная» функция, которая может быть вызвана отдельно
   или передана в setTimeout (контекст всегда будет правильным).
 */