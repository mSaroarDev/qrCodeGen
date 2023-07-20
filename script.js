let url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

let inputBox = document.querySelector('.box input');
let btn = document.querySelector('.box button');
let qrImg = document.querySelector('.box img');
let imgbox = document.querySelector('.imgbox');
let h6 = document.querySelector('h6');

function genQr(){

    if(inputBox.value === ''){
        alert('Please input text or url')
    }else{
        qrImg.src = url + inputBox.value;
        imgbox.classList.add('showImg');
        h6.innerText = inputBox.value;
    }
}