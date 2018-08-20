window.onload=function () {
    var oUl=document.getElementById('list');
    var aLi=oUl.getElementsByTagName('li');
    var p=oUl.getElementsByTagName('p');
    var strongs=oUl.getElementsByTagName('strong');
    var spans=oUl.getElementsByTagName('span');
    var ems=oUl.getElementsByTagName('em');


    for (var i=0;i<aLi.length;i++){
        fn1(aLi[i]);
    }
    function fn1(oLi) {
        //通过Li获取元素，核心程序实现，用函数包起来。
        var btn=oLi.getElementsByTagName('input');
        var strong=oLi.getElementsByTagName('strong')[0];
        var em=oLi.getElementsByTagName('em')[0];
        var span=oLi.getElementsByTagName('span')[0];

        var n1=Number(strong.innerHTML);
        var n2=parseFloat(em.innerHTML);

        btn[0].onclick=function () {
            n1--;//隐式类型转换
            if (n1<0) {
                n1=0
            }
            strong.innerHTML=n1;
            span.innerHTML=n1*n2+'元';
            price();

            //p.innerHTML+=sum+'元';
        }
        btn[1].onclick=function () {
            n1++;//隐式类型转换
            strong.innerHTML=n1;
            span.innerHTML=n1*n2+'元';
            price();
        }
        function price() {
            var total=0;
            var num=0;
            var max=0;
            for (var i=0;i<strongs.length;i++){
                total+=parseFloat(spans[i].innerHTML);
                p[0].innerHTML=total+'元';
                num+=parseInt(strongs[i].innerHTML);
                p[1].innerHTML=num+'件';
                //当商品数量不为0的时候才能进行比较
                if (strongs[i].innerHTML!=0) {
                    if (parseFloat(ems[i].innerHTML)>max) {
                        max=parseFloat(ems[i].innerHTML);
                    }
                }
                p[2].innerHTML=max+'元';

            }
        }
    }


}