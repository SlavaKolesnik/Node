const myArr = []
for (let i = 0; i <= 10; i++) {
    myArr.push(i)
}

function binary_search(list, item) {
    let low = 0
    let high = list.length - 1
    console.log('h' + high)

    let count = 0
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = list[mid]
        count++
        if (guess === item) {
            console.log(count)
            return mid
        } else if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null
}
console.log(binary_search(myArr, 9))
console.log(myArr)
