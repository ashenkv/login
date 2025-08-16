
function login(){

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (email.value == "") {
        email.placeholder = "please enter your Email";
    }else if(email != "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"){
        email.value = "";
        email.placeholder = "Invalid Email";
    }
    if(password.value == ""){
        password.placeholder = "please enter your Password";
    }

}

function register(){

    let uname = document.getElementById("uname");
    let email = document.getElementById("em");
    let password = document.getElementById("pw");

    if (uname.value == "") {
        uname.placeholder = "please enter your Username";
    }
    if (email.value == "") {
        email.placeholder = "please enter your Email";
    }else if(email != "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"){
        email.value = "";
        email.placeholder = "Invalid Email";
    }
    if(password.value == ""){
        password.placeholder = "please enter your Password";
    }else if(password != "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"){
        password.value = "";
        password.placeholder = "Password not like an our guidelines";
    }

}


function goRegister(){
    document.getElementById("signupContainer").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
}

function goLogin(){
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("signupContainer").style.display = "none";
}

