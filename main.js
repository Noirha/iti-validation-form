let pas1 = document.querySelector("#pas1")
let pas2 = document.querySelector("#pas2")
let out1 = document.querySelector("#out1")
let out2 = document.querySelector("#out2")
let out3 = document.querySelector("#out3")
let user = document.querySelector("#text")

document.forms[0].addEventListener("submit", (eo) => {
    let valid = false;

    let reg = /^[0-9]+[a-z]/;

    if (pas1.value.match(reg)) {
        valid = true
    }
    else {
        eo.preventDefault()
        out1.innerHTML = "Passwords must have at least one non alphanumeric character."
    }



    if (user.value === "") {
        eo.preventDefault()
        out3.innerHTML = "Enter Username"
    }
    else if (user.value.length < 3) {
        eo.preventDefault()
        out3.innerHTML = "The field UserName must be a string or array type with a minimum length of '3'."
    } else {
        valid = true;
    }

    if (pas1.value !== pas2.value) {
        eo.preventDefault()
        out2.innerHTML = "'ConfirmPassword' and 'Password' do not match";
        out1.innerHTML = ""
    }
    else {
        valid = true;
    }
    if (pas1.value.length <= 5) {
        eo.preventDefault()
        out1.innerHTML = "Passwords must be at least 6 characters";
    }
    else {
        valid = true;
    }
    if (pas1.value === "") {
        eo.preventDefault()
        out1.innerHTML = "Enter Your Password";
    }
    else {
        valid = true;
    }



    if (valid === false) {
        eo.preventDefault()
    }
})
