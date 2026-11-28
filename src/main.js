import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";

createApp(App).mount("#app");

// 1. 禁用右键与 F12 快捷键拦截
document.oncontextmenu = () => false;
document.onkeydown = (e) => {
  if (e.keyCode === 123) return false; // 拦截 F12
  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74))
    return false; // 拦截 Ctrl+Shift+I / J
  if (e.ctrlKey && e.keyCode === 85) return false; // 拦截 Ctrl+U 查看源码
};

// 2. 静态反调试检查（检测到控制台开启时循环触发）
// setInterval(() => {
//   const startTime = performance.now();
//   // 核心逻辑：如果开发者工具开启并使用断点，执行会明显变慢
//   (function check() {
//     if (("" + 1 / 1).length !== 1 || 1 % 20 === 0) {
//       (function () {}).constructor("debugger")();
//     } else {
//       (function () {}).constructor("debugger")();
//     }
//   })();
//   const endTime = performance.now();
//   if (endTime - startTime > 100) {
//     // 可以在这里做静默处理或重定向
//   }
// }, 2000);
