# 结论
在非内存共享的情况下，针对 o(n) 复杂度以下的计算，没有上 worker 的必要。
# 数据
|内容 | 时间
| ----|----|
| 创建大对象 | 1903.920166015625 ms|
| 序列化时间 | 399.43408203125 ms |
| 反序列化 | 1389 |
| 异步计算  | 2144.6591796875 ms|
| 收到总耗时 | 1789 ms |
| 收发总耗时 |3934 ms |
| 本地计算 | 2467.38818359375 ms|


---
主进程时间 = 序列化时间 + 本地计算

----
worker 进程时间 = 反序列化 + 异步计算 (+ 结果序列化过程)

# 相关知识点
*  [结构化克隆算法](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
* [ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
*  [Worker/postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/postMessage)
