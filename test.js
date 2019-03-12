//  generator 必须要有*  配合yeild ,碰到yield 就停止，再次调用next就继续走
// 当遇到return时就迭代完成了
// 第一个next传递参数是没有效果的
// 第二次next传递的参数 是第一次yield的返回值
function * thing() {
    let a = yield 1;
    console.log(a);
    let b = yield 2;
    console.log(b);
    return b;
}
let it = thing();
console.log(it.next(111));
console.log(it.next(2000));
console.log(it.next('4000'));
