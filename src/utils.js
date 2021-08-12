export const creatBigObject = (maxCount = 99999) => {
    let count = 0

    const obj = {}
    const setValue = (origin = {}, key, value) => {
        origin[key] = value
        count++
        return origin
    }
    const getKey = (v) => {
        return `${v}_${Math.random()}`
    }
    const getValue = () => {
        const rand = Math.random()
        if (rand < 0.5) {
            const origin = {}
            setValue(origin, getKey(count), getValue())
            return origin
        } else {
            return rand
        }
    }
    while (count < maxCount) {
        setValue(obj, getKey(count), getValue())
    }
    return obj
}
export const getRes = (obj, count = 10) => {
    let res = 0
    const getSum = (obj) => {
        for (let key in obj) {
            let value = obj[key]
            if (typeof value === 'number') {
                res = res + value
            } else {
                getSum(value)
            }
        }
    }
    for (let index = 0; index < count; index++) {
        getSum(obj)
    }
    return res
}