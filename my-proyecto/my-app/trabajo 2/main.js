const fs = require("fs");

class Container {
    constructor(fileName) {
        this.fileName = fileName;
        this.id = 0;
        fs.writeFileSync(this.fileName, "[]")
    }

    nextId() {
        this.id++
        return this.id;
    }

    save(item) {
        let items = this.getAll();
        item.id = this.nextId();
        items.push(item);
        fs.writeFileSync(this.fileName, JSON.stringify(items));
        return item.id
    }

    getById(itemId) {
        let items = this.getAll();
        return items.filter(item => item.id == itemId)
    }

    getAll() {
        let result = fs.readFileSync(this.fileName).toString();
        return JSON.parse(result);
    }

    deleteById(itemId) {
        let items = this.getAll();
        let exclude_items = items.filter(item => item.id != itemId)
        fs.writeFileSync(this.fileName, JSON.stringify(exclude_items));
    }

    deleteAll() {
        fs.writeFileSync(this.fileName, "[]")
    }
}

let container = new Container("test.txt")
let a1 = { name: "item1", stock: 20 }
let a2 = { name: "item1", stock: 20 }
let a3 = { name: "item1", stock: 20 }
let a4 = { name: "item1", stock: 20 }
let a5 = { name: "item1", stock: 20 }
container.save(a1)
container.save(a2)
container.save(a3)
container.save(a4)
container.save(a5)
console.log(container.getAll())
console.log(container.getById(1))
console.log(container.getById(2))
container.deleteById(4);
console.log(container.getAll())

module.exports = Container;