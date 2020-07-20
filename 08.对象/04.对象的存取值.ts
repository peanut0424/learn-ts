// 对象的存取值

interface iPerson {
    name: string
    age: number
    gender: string
    gaming: () => void
}

let p: iPerson = {
    name: '周杰伦',
    age: 40,
    gender: '男',
    gaming() {
        console.log('legends never die')
    }
}

// 对象取值
console.log(p.name)
p.gaming()
// 对象存值
p.name = '周董'
console.log(p.name)