# css部分  
  
## 1、BFC  
  
- 在一个块级排版上下文中，盒子是从包含块顶部开始，垂直的一个接一个的排列的。 相邻两个盒子之间的垂直的间距是被margin属性所决定的，在一个块级排版上下文中相邻的两个块级盒之间的垂直margin是折叠的  
  
## 2、水平竖直居中方案 [链接](https://blog.csdn.net/qq_27576607/article/details/78697812)      
# js部分  
## 1、new 构造函数发生了哪几个步骤  
- 创建一个新对象；  
- 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；  
- 执行构造函数中的代码（为这个新对象添加属性）；  
- 返回新对象  
## 2、原型链问题  
```angular2html  
 foo = function () { this.number = 1; }; foo.number = 2; foo.prototype.number = 3; bar = new foo();  
 console.log(foo.number);    //2 console.log(bar.number);    //1 console.log(foo.constructor);   //Fun console.log(foo.prototype.constructor); //foo console.log(bar.constructor);   //foo console.log(bar.prototype);     //underfined
```  
  
## 3、http2优势 [地址](https://mp.weixin.qq.com/s/hjxU-rjr-ISk0rzeQHAIeA)  
  
- 多路复用  
- 二进制分帧  
- 首部(头部)压缩  
- 服务端主动推送消息  
  
##  4、强制缓存与协商缓存 [地址](https://juejin.im/post/5b556aa8e51d451917171923#heading-11)  
- 强制缓存Catch-Control 、 Expires  
```angular2html
cache-control:max-age=691200  
expires:Fri, 14 Apr 2017 10:47:02 GMT  
```  
- 协商缓存  
```angular2html  
Last-Modified和If-Modified-Since对应  
Etag和If-None-Match  
```  
## 5、手写防抖函数 [地址](http://www.manongjc.com/article/12402.html)  
  
```angular2html  
function debounce(func, wait = 0) {  
 let timer; function clearTimer(){ clearTimeout(timer); timer = null; } function debounced(...args) { let self = this; if(timer == null){ addTimer(); return }else { clearTimer(); addTimer(); return } function addTimer() { timer = setTimeout(()=>{ invokeFunc(); clearTimer() },wait) } function invokeFunc() { func.apply(self,args) }  
 } return debounced}  
```  
## 6、二叉树 [地址] (http://foreverz.cn/2016/10/19/%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%8EJavaScript/)  
  
- 前序遍历：访问根–>遍历左子树–>遍历右子树;  
- 中序遍历：遍历左子树–>访问根–>遍历右子树;  
- 后序遍历：遍历左子树–>遍历右子树–>访问根;  
- 广度遍历：按照层次一层层遍历;  
  
  
## 7、浏览器的事件循环 [地址] (https://juejin.im/post/5b7b95206fb9a019bd2463d8#heading-19)  
- 常见的宏任务：  
setTimeout  
setImmediate(只有ie支持)  
setInterval  
messageChannel    
- 常见的微任务：  
Promise.then()  
mutationObserver    
## 8、闭包  
  
```angular2html  
for(var j = 0;j < 3;j++){  
 (function(j){ setTimeout(function(){ console.log(j) },1000) })(j)}  
```    
## 9、数组的去重[链接](https://mp.weixin.qq.com/s/AxEa2cYVqrMzWf-D2sTyHw)   
```angular2html  
let arr = [2,4,2,6,4,8,10];  
//1、利用for嵌套for，然后splice去重  
function unique(arr) {  
 for(let i=0;i<arr.length;i++){ for(let j=i+1;j<arr.length;j++){ if(arr[i] == arr[j]){ arr.splice(j,1); j--; } } } return arr}  
//2、利用indexOf去重  
function unique1(arr){  
 let array = []; for(let i=0;i<arr.length;i++){ if(array.indexOf(arr[i]) === -1){ array.push(arr[i]) } } return array}  
//3、利用对象的属性不能相同的特点进行去重  
function unique2(arr){  
 let array = []; let obj = {}; for(let i=0;i<arr.length;i++){ if(!obj[arr[i]]){ array.push(arr[i]); obj[arr[i]] = 1; }else { obj[arr[i]]++ } } return array}  
  
```  
  
# react部分  
## 1、生命周期    
![生命周期](http://118.25.231.107:8080/lifeCycle.jpg)  
  
# node部分    
## 1、中间件实现(koa)  
```angular2html  
function app() {  
  
}  
app.routes = [];  
app.use = function (fn) {  
 app.routes.push(fn)};  
app.use((ctx,next)=>{  
 console.log(1); next(); console.log(2);});  
app.use((ctx,next)=>{  
 console.log(3); next(); console.log(4);});    
  
let index= 0;  
function next() {  
 if(app.routes.length ===index) return; let route =  app.routes[index++]; console.log(String(route)); route({},next);}  
next();  
```  
## 2、generator函数  
  
```angular2html  
//  generator 必须要有* 配合yeild ,碰到yield 就停止，再次调用next就继续走  
// 当遇到return时就迭代完成了  
// 第一个next传递参数是没有效果的  
// 第二次next传递的参数 是第一次yield的返回值  
function * thing() {  
 let a = yield 1; console.log(a); let b = yield 2; console.log(b); return b;}  
let it = thing();  
console.log(it.next(111));  
console.log(it.next(2000));  
console.log(it.next('4000'));  
```
