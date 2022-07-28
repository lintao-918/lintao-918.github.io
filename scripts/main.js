// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/CW1.jpg'){
        myImage.setAttribute('src','images/CW2.jpg');
    } else {
        myImage.setAttribute('src','images/CW1.jpg');
    }
}

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null){
        setUserName();
    }
    else{
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla 酷毙了，'+myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName=localStorage.getItem('name');
    myHeading.textContent='Mozilla 酷毙了，'+storeName;
}

myButton.onclick=function(){
    setUserName();
};