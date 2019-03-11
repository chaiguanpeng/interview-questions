#js部分
##1、new 构造函数发生了哪几个步骤
- 创建一个新对象；
- 将构造函数的作用域赋给新对象（因此this就指向了这个新对象）；
- 执行构造函数中的代码（为这个新对象添加属性）；
- 返回新对象

##2、原型链问题
```angular2html
 foo = function () {
        this.number = 1;
    };
    foo.number = 2;
    foo.prototype.number = 3;
    bar = new foo();

    console.log(foo.number);    //2
    console.log(bar.number);    //1
    console.log(foo.constructor);   //Fun
    console.log(foo.prototype.constructor); //foo
    console.log(bar.constructor);   //foo
    console.log(bar.prototype);     //underfined
```

##3、http2优势 [地址](https://mp.weixin.qq.com/s/hjxU-rjr-ISk0rzeQHAIeA)
- 多路复用
- 二进制分帧
- 首部(头部)压缩
- 服务端主动推送消息

##4、强制缓存与协商缓存 [地址](https://juejin.im/post/5b556aa8e51d451917171923#heading-11)
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
##5、手写防抖函数 [地址](http://www.manongjc.com/article/12402.html)

```angular2html
function debounce(func, wait = 0) {
    let timer;
    function clearTimer(){
        clearTimeout(timer);
        timer = null;
    }
    function debounced(...args) {
        let self = this;
        if(timer == null){
            addTimer();
            return
        }else {
            clearTimer();
            addTimer();
            return
        }
        function addTimer() {
            timer = setTimeout(()=>{
                invokeFunc();
                clearTimer()
            },wait)
        }
        function invokeFunc() {
            func.apply(self,args)
        }

    }
    return debounced
}
```
##6、二叉树 [地址] (http://foreverz.cn/2016/10/19/%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%8EJavaScript/)
- 前序遍历：访问根–>遍历左子树–>遍历右子树;
- 中序遍历：遍历左子树–>访问根–>遍历右子树;
- 后序遍历：遍历左子树–>遍历右子树–>访问根;
- 广度遍历：按照层次一层层遍历;

##7、BFC
- 在一个块级排版上下文中，盒子是从包含块顶部开始，垂直的一个接一个的排列的。 相邻两个盒子之间的垂直的间距是被margin属性所决定的，在一个块级排版上下文中相邻的两个块级盒之间的垂直margin是折叠的
##8、浏览器的事件循环
- 常见的宏任务：
setTimeout
setImmediate(只有ie支持)
setInterval
messageChannel

- 常见的微任务：
Promise.then()
mutationObserver
