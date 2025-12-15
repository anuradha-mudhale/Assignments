function validatePassword()
{
    let passwordInput = document.getElementById("password");
    let password = passwordInput.value;
    let errorMsg = document.getElementById("passwordError");
    if(password.length < 6)
    {
        errorMsg.innerText = "Password must be at least 6 character long";
        passwordInput.classList.add("error");
        passwordInput.classList.remove("success");

        return false;
    }else{
        errorMsg.innerText = "";
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");

        alert("login Successfu!!");
        emailInput.value="";
        passwordInput.value="";
        return false;

        
    }
}