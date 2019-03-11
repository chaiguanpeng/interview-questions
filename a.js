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
