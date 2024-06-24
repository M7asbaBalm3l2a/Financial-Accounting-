

function changeheader(){
    var headercolor = document.getElementById('header');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        headercolor.classList.remove('headerColor');
    } else{
        headercolor.classList.add('headerColor');
    }
}

window.addEventListener('scroll', changeheader);





function checkCredentials() {
    var email = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    var correctEmails = ["30110221802378", "30110221802370", "30110221802380"];
    var correctPasswords = ["30110221802378", "30110221802370", "30110221802380"];

    // فحص إذا كان البريد الإلكتروني موجود في المصفوفة
    if (correctEmails.includes(email)) {
        // فحص إذا كان كلمة المرور موجودة في المصفوفة المقابلة
        if (correctPasswords[correctEmails.indexOf(email)] === password) {
            window.location.href = "Home/index.html";
        } else {
            alert("الرقم القومي أو كلمة مرور غير صحيحة");
        }
    } else {
        alert("الرقم القومي أو كلمة مرور غير صحيحة");
    }
}


(function () {
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



















