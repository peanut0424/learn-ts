// 练习1:求数组中所有元素的和
let sum: number = 0

let arr1: number[] = [200, 30, 3]

for (let i: number = 0; i < arr1.length; i++) {
    sum += arr1[i]
}

console.log('sum = ' + sum);

// 找出数组中的最大值

let arr2: number[] = [1, 9, 3, 12, 8, 21]
let max: number = arr2[0]

for (let i: number = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i]
    }
}

console.log('max = ' + max)

// 找出数组中所有不为0的元素
let arr3: number[] = [1, 3, 0, 25, 33, 0, 0, 6]
let newArr: number[] = []
newArr = arr3.filter(element => {
    return element !== 0
})

console.log(newArr)