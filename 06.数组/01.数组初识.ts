// 声明一个包含字符串与数字的数组
let nameArr: (string | number)[] = ['友哈巴赫', '黑崎一护', '蓝染惣右介', 1, 2, 3]

// 通过for-of遍历数组nameArr
// for (let el of nameArr) {
//     console.log(el);
// }

// 数组长度array.length
// console.log(nameArr.length)
nameArr.push(4)
nameArr.push(5)
nameArr.push(6)

// console.log(nameArr.length)
// 数组下标从0开始
// console.log(nameArr[0]);

nameArr[3] = '黑崎真咲'
nameArr[4] = '志波一心'
console.log(nameArr);