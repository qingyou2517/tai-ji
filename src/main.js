let html = document.querySelector("#html");
// 用css选择器找到 "#html"
let style=document.querySelector('#style');

let string=`/*你好，我叫青游
 *接下来，我要演示一下我的前端功底
 *首先，我要准备一个div
 **/
 #div1 {
    border:1px solid red;
    width:200px; 
    height:200px;

}
/*接下来，把div变成变成一张太极八卦图
 *注意看好喽！！
 *首先，把div变成圆
**/
#div1{
    position:relative;
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是一阴一阳
 *先画阴阳鱼
 **/
#div1{
    
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    display:block;
    position:absolute;
    content:'';
    
    width:100px;
    height:100px;
    left:50%;
    transform: translateX(-50%);
    border-radius:50%;
    background:black;
}
#div1::after{
    display:block;
    position:absolute;
    content:'';
    
    width:100px;
    height:100px;
    left:50%;
    transform: translateX(-50%);
    border-radius:50%;
    background:white;
    bottom:0;
}
/*而阴中有阳，阳中有阴
 *故再添阴阳眼
 **/
 #div1::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}

`;
let string2='';
//string用来保存实际作用的代码和注释字符串，string2用来保存 转义之后给用户看的代码和注释字符串

// string=string.replace(/\n/g,'<br>')
//replace方法只会把第一个回车换成html里的换行，想全部替换，需要正则表达式；可是用replace方法还是会把<br>字符识别进来：末尾显示一个 < 又立马消失再换行

let n=0;

let step=()=>{
    setTimeout(() => {
        //遇到换行，string2就添加换行字符
        if(string[n]==='\n'){
            string2+='<br>';
            //<br>会成为string2的字符子串，显然，string2的长度大于string
        }
        else if(string[n]===' '){
            string2+='&nbsp;';
            //同理，空格也要转义成html能识别的空格：&nbsp;
        }
        //没有换行字符，string2就原样保存string
        else{
            string2+=string[n];
        }
        
        // console.log(string2.substring(0,n))
        //substring方法里的n表示第n个字符，从1开始
        html.innerHTML = string2;
        style.innerHTML= string.substring(0,n);
        window.scrollTo(0,9999999);
        html.scrollTo(0,999999);
        //直接在html里打印string2，而不是string2.substring(0,n)
        n++;
        
        if(n<string.length){
            step();
        }
        
    },5);
}
//setTimeout()只响应一次，setInterval()可以一直响应，一般用setTimeout()递归来多次响应

step();
