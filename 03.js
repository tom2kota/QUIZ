let dog = {
    name: 'Tommy',
    printName() {
        console.log(this.name)
    }
}

let printName = () => dog.printName()

printName()
