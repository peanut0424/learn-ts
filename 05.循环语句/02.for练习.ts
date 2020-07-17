// for打印1~5

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// for 判断素数
for (let i = 2; i <= 100; i++) {
    let flag = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = false
            break
        }
    }

    if (flag) {
        console.log(i + '是素数')
    }
}