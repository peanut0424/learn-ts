let person = {
    name: '张三',
    age: 20,
    sing() {
        console.log(this.name + '在唱歌')
    }
}

console.log(person)
person.sing()

class Person {
    name: string;
    age: number;
    gender: string;
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    gaming() {
        console.log(this.name + "正在吃鸡")
    }
}

let p = new Person("张三", 18, "男")
console.log(p)
p.gaming()