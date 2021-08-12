import { getRes } from './utils'
self.onmessage = ({ data: { question, time } }) => {
    const startTime = new Date()
    const timeRecieve = startTime - time
    console.time(`异步计算`)
    const runTime = getRes(question)
    console.timeEnd(`异步计算`)
    self.postMessage({
        answer: `收到总耗时：${timeRecieve}；`,
        time: new Date()
    });
};
