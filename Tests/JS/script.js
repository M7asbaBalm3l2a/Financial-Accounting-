
function changeBg(){
    var headercolor = document.getElementById('header');
    var scrollValue = window.scrollY;
    if(scrollValue < 40){
        headercolor.classList.remove('headerColor');
    } else{
        headercolor.classList.add('headerColor');
    }
}
window.addEventListener('scroll', changeBg);



var menu = document.getElementById("menu");
function openmenu(){
    menu.style.left = "0";
}
function closemenu(){
    menu.style.left = "-35%";
}


function sumNumbers() {
    const numper1 = parseInt(document.getElementById("num1").value);
    const numper2 = parseInt(document.getElementById("num2").value);
    
    if (!isNaN(numper1) && !isNaN(numper2)) {
        const sum = numper1 + numper2;
        document.getElementById("tot1").value = sum;
    } else {
        document.getElementById("tot1").value = "";
    }
}


function checkNumber() {
    const num = parseInt(document.getElementById("total").value);
    if (num === 5000) {
        document.getElementById("total").style.borderColor = "green";
    } else {
        document.getElementById("total").style.borderColor = "red";
    }
}


(function () {
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
