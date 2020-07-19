function getSum(nums: number[]) {
    let sum = 0
    for (const val of nums) {
        sum += val
    }
    return sum
}

let nums: number[] = [1, 3, 4, 5, 2, 6, 8]
let sum = getSum(nums)
console.log('sum = ' + sum)
