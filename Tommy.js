 
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username !== "user" && password !== "web_dev") {
document.getElementById('username-field').value;
document.getElementById('password-field').value;
        alert("You typed in "+password+" and "+username);
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
