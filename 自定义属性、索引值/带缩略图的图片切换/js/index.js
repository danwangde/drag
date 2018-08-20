window.onload = function(){
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oLeft = document.getElementById('pic_left');
    var oRight = document.getElementById('pic_right');

    var oImgl = oLeft.getElementsByTagName('img')[0];
    var oImgr = oRight.getElementsByTagName('img')[0];
    var oSpanl = oLeft.getElementsByTagName('span')[0];
    var oSpanr = oRight.getElementsByTagName('span')[0];
    var oPl = oLeft.getElementsByTagName('p')[0];
    var oPr = oRight.getElementsByTagName('p')[0];

    var arrdog = ['img/dog-1.jpg','img/dog-2.jpg','img/dog-3.jpg']
    var arrcat = ['img/cat-1.jpg','img/cat-2.jpg','img/cat-3.jpg','img/cat-4.jpg']
    var arrl = ['左边第1张','左边第2张','左边第3张','左边第4张']
    var arrr = ['右边第1张','右边第2张','右边第3张']
    var num=0;
    var m=0;
    //初始化
    function fncat(){
        oImgl.src = arrcat[num];
        oSpanl.innerHTML = 1+num+'/'+arrcat.length;
        oPl.innerHTML = arrl[num];
    };
    function fndog(){
        oImgr.src = arrdog[m];
        oSpanr.innerHTML = 1+m+'/'+arrdog.length;
        oPr.innerHTML = arrr[m];
    }
    fncat();
    fndog();
    oBtn2.onclick = function(){
        num++;
        m++;
        if(num==arrcat.length){
            num=0;
        }fncat();

        if(m==arrdog.length){
            m=0;
        }fndog();
    };

    oBtn1.onclick = function(){
        num--;
        m--;
        if(num==-1){
            num=arrcat.length-1;
        }fncat();

        if(m==-1){
            m=arrdog.length-1;
        }fndog();
    };
    oImgl.onclick = function(){
        num++;
        if(num==arrcat.length){
            num=0;
        }
        fncat();
    };

    oImgr.onclick = function(){

        m++;
        if(m==arrdog.length){
            m=0;
        }fndog();
    };
};