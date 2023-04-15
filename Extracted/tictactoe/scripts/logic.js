window.addEventListener('load', bindEvents);
var isGameStart = false;

function bindEvents(){
   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button=>button.addEventListener('click', printXorZero));
    document.querySelector('#gen-code').removeEventListener('click',printXorZero);
    document.querySelector('#join-code').removeEventListener('click',printXorZero);
    document.querySelector('#gen-code').addEventListener('click', generateCode);
    document.querySelector('#join-code').addEventListener('click', joinWithCode);
    //console.log('All buttons ', buttons, ' Len ', buttons.length);
}



function printXorZero(){
    console.log('Print X or zero called...');
}

function joinWithCode(){
    console.log('Join with Code....');
}

function generateCode(){
    console.log('Gen Code');
}