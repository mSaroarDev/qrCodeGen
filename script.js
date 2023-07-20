let url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

let inputBox = document.querySelector('.box input');
let btn = document.querySelector('.box button');
let qrImg = document.querySelector('.box img');
let imgbox = document.querySelector('.imgbox');
let h6 = document.querySelector('h6');

function genQr(){

    if(inputBox.value !== ''){
        qrImg.src = url + inputBox.value;
        imgbox.classList.add('showImg');
        inputBox.style.marginBottom = '0px';
    }else{
        inputBox.classList.add('error');
        inputBox.placeholder = 'Please input some text or url';
        setTimeout(()=>{
            inputBox.classList.remove('error')
        }, 1000);
    }
}