const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');
const inputDiv = document.querySelector('.input-div');
const mainContainer = document.getElementById('main-container');
const thanksContainer = document.getElementById('thanks-con');

form.addEventListener('submit',function(e){
    e.preventDefault();

    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorMsg.style.display = 'block';
        inputDiv.style.border = "2px solid hsl(4, 100%, 67%)";
        inputDiv.style.backgroundColor = "hsl(4, 100%, 67%,0.5)";
        inputDiv.style.width = "100%";
        inputDiv.style.padding = "12px 16px";
        inputDiv.style.borderRadius = "6px";
    } else {
        mainContainer.style.display = 'none';
        thanksContainer.style.display = 'block';
        
    }
})



