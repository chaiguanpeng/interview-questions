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
##3、http2优势
- 多路复用
- 二进制分帧
- 首部(头部)压缩
- 服务端主动推送消息
##4、强制缓存与协商缓存

