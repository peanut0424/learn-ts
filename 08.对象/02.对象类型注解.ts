// 类型注解

let person: {
    name: string
    age: number
    sing: () => void
}

person = {
    name: "张三",
    age: 20,
    sing() {
        console.log(this.name + '在唱歌')
    }
}

console.log(person)