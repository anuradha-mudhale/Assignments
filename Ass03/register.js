
function validateRegister() {
    let isValid = true;

    // Get inputs
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phone = document.getElementById("phone");

    // Name
    if (name.value.trim() === "") {
        showError(name, "nameError", "Please enter your name.");
        isValid = false;
    } else {
        showSuccess(name, "nameError");
    }

    // Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "emailError", "Please enter a valid email address.");
        isValid = false;
    } else {
        showSuccess(email, "emailError");
    }

    // Password
    if (password.value.length < 6) {
        showError(password, "passwordError", "Password must be at least 6 characters long.");
        isValid = false;
    } else {
        showSuccess(password, "passwordError");
    }

    // Phone
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        showError(phone, "phoneError", "Please enter a valid phone number.");
        isValid = false;
    } else {
        showSuccess(phone, "phoneError");
    }

    // Success popup
    if (isValid) {
        alert("Registration successful!");
        document.querySelector("form").reset();
        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("success");
        });
    }

    return false; // prevent page reload
}

function showError(input, errorId, message) {
    input.classList.add("error");
    input.classList.remove("success");
    document.getElementById(errorId).innerText = message;
}

function showSuccess(input, errorId) {
    input.classList.remove("error");
    input.classList.add("success");
    document.getElementById(errorId).innerText = "";
}

function validateName() {
    let input = document.getElementById("name");
    let error = document.getElementById("nameError");

    if (input.value.trim() === "") {
        input.classList.remove("success");
        input.classList.remove("error");
        error.innerText = "";
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        error.innerText = "";
    }
}

function validateEmail() {
    let input = document.getElementById("email");
    let error = document.getElementById("emailError");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (input.value === "") {
        input.classList.remove("success", "error");
        error.innerText = "";
    } else if (!pattern.test(input.value)) {
        input.classList.add("error");
        input.classList.remove("success");
        error.innerText = "Please enter a valid email address.";
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        error.innerText = "";
    }
}

function validatePasswordField() {
    let input = document.getElementById("password");
    let error = document.getElementById("passwordError");

    if (input.value === "") {
        input.classList.remove("success", "error");
        error.innerText = "";
    } else if (input.value.length < 6) {
        input.classList.add("error");
        input.classList.remove("success");
        error.innerText = "Password must be at least 6 characters long.";
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        error.innerText = "";
    }
}

function validatePhone() {
    let input = document.getElementById("phone");
    let error = document.getElementById("phoneError");
    let pattern = /^[0-9]{10}$/;

    if (input.value === "") {
        input.classList.remove("success", "error");
        error.innerText = "";
    } else if (!pattern.test(input.value)) {
        input.classList.add("error");
        input.classList.remove("success");
        error.innerText = "Please enter a valid phone number.";
    } else {
        input.classList.remove("error");
        input.classList.add("success");
        error.innerText = "";
    }
}
