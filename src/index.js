import { creatBigObject, getRes } from './utils'

const worker = new Worker(new URL('./worker.js', import.meta.url));
let startTime
let size = 1000000
let obj = {}

document.querySelector(`#localObj`).addEventListener('click', () => {
    console.time('本地计算')
    getRes(obj)
    console.timeEnd('本地计算')
})

document.querySelector(`#parseObj`).addEventListener('click', () => {
    startTime = new Date()
    console.time('序列化时间')
    worker.postMessage({
        time: startTime,
        question: obj
    });
    console.timeEnd('序列化时间')

})

document.querySelector(`#createObj`).addEventListener('click', () => {
    console.time('开始创建大对象')
    obj = creatBigObject(size)
    console.timeEnd('开始创建大对象')
})
document.querySelector(`#input`).value = size
document.querySelector(`#input`).addEventListener('input', (e) => {
    console.log(e.target.value)
})

worker.onmessage = ({ data: { answer } }) => {
    console.log(answer);
    console.log(`收发总耗时`, new Date() - startTime)
};