// 接口初识
interface iPerson {
    name: string
    age: number
    gaming: () => void
}

let p1: iPerson = {
    name: '李四',
    age: 20,
    gaming() {
        console.log(this.name + '正在吃鸡')
    }
}

console.log(p1)