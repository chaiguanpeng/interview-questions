for(var j = 0;j < 3;j++){
    (function(j){
        setTimeout(function(){
            console.log(j)
        },1000)
    })(j)
}
