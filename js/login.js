// registar variable 
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btnLogin = document.querySelector("#btn");

let getUser = localStorage.getItem("username");
let getpass = localStorage.getItem("password");

btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
        alert("Error! plz full data");
    }else {
        if (getUser && getUser.trim() === username.value.trim() && getpass && getpass === password.value){
            window.location = "index.html"
        }else {
            console.log("somthing is wrong")
        }
    }
})