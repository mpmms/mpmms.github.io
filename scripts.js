function func1(){
    window.location.href = 'https://ble.ir/join/EurNFLutxd'
}
function tometal(){
    window.location.href = 'https://mpmms.github.io/mc.html'
}
function togit(){
    window.location.href = 'https://github.com/mpmms'
}
function tohome(){
    window.location.href = 'https://mpmms.github.io'
}
const skills = ["فرانت اند", "پایتون", "ربات تلگرامی", "ربات بله"];
let index = 0;

document.addEventListener('DOMContentLoaded', () => {
    const changedElement = document.getElementById('changedElement');
    const fixedText = "برنامه نویس ";
    let isFirstRun = true;
    
    function typeWriter(text, i = 0) {
        if (isFirstRun) {
            changedElement.textContent = fixedText;
            isFirstRun = false;
        }
        
        if (i < text.length) {
            changedElement.textContent = fixedText + text.substring(0, i + 1);
            setTimeout(() => typeWriter(text, i + 1), 100);
        } else {
            setTimeout(deleteText, 2000, text);
        }
    }

    function deleteText(text, i = text.length) {
        if (i > 0) {
            changedElement.textContent = fixedText + text.substring(0, i - 1);
            setTimeout(() => deleteText(text, i - 1), 50);
        } else {
            setTimeout(changeElement, 500);
        }
    }

    function changeElement() {
        if (index >= skills.length) {
            index = 0;
        }
        typeWriter(skills[index]);
        index++;
    }
    
    changeElement();
});
