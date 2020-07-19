// 求三角形面积
/**
 * 求三角形的面积(通过海伦公式)
 * @param a 三角形的一条边
 * @param b 三角形的一条边
 * @param c 三角形的一条边
 */
function area(a: number, b: number, c: number): number {
    let p: number = (a + b + c) / 2
    let result: number = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    return result
}

console.log("triangle area is：" + area(4, 4, 5))

// 求两个数中的最大值
/**
 * 求两个数的最大值
 * @param num1 
 * @param num2 
 */
function getMax(num1: number, num2: number): number {
    return num1 > num2 ? num1 : num2
}

console.log("max number is：" + getMax(10, 20))