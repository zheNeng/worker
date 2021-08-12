/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
self.onmessage = ({ data: { question } }) => {

    self.postMessage({
        answer: `收到的：${question}；
    我告诉你的:42
      `,
    });
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3dvcmtlcl9qcy5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0JBQW9CLFFBQVEsWUFBWTs7QUFFeEM7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3dvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJzZWxmLm9ubWVzc2FnZSA9ICh7IGRhdGE6IHsgcXVlc3Rpb24gfSB9KSA9PiB7XG5cbiAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgYW5zd2VyOiBg5pS25Yiw55qE77yaJHtxdWVzdGlvbn3vvJtcbiAgICDmiJHlkYror4nkvaDnmoQ6NDJcbiAgICAgIGAsXG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9