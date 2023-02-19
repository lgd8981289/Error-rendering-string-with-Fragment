const { h, render, Fragment } = Vue;
const vnode = h(Fragment, 'hello world');
// 挂载
render(vnode, document.querySelector('#app'));
