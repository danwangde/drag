function doMove(obj,attr,dir,target,endFn) {//endFn 回调函数
    dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var speed=parseInt(getStyle(obj,attr))+dir;//12   步长(向左)
        if (speed>target && dir>0 ||speed<target && dir<0){//往下(上)跑
            speed=target;
        }

        obj.style[attr]=speed+'px';
        if (speed==target){
            clearInterval(obj.timer);
            /* if (endFn){
                endFn();
             }*/  //和下面等价
            endFn &&  endFn();
        }
    },40)
}
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr]: getComputedStyle(obj)[attr];
}