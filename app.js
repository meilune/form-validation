const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");4

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    //Using Constraint API
    isValid = form.checkValidity();
    if (!isValid) {
        //Style main message for an error
        message.textContent = "Please fill out all fields.";
        message.style.color = "#A62F03";
        messageContainer.style.borderColor = "#A62F03";
        return;
    } 
    //Checking if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = "#048C73";
        password2El.style.borderColor = "#048C73";
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match!'
        message.style.color = "#A62F03";
        messageContainer.style.borderColor = "#A62F03";
        password1El.style.borderColor = "#A62F03";
        password2El.style.borderColor = "#A62F03";
        return;
    }
    //If everything is successful we get the success message
    if(isValid && passwordsMatch) {
        //Style main message for correct outcome
        message.textContent = "Successfully console.log'ed! :)";
        message.style.color = "#048C73";
        messageContainer.style.borderColor = "#048C73";
    }
}

//Store the data from the form
function storeFormData() {
    //Get the values from the inputs with specifically named values
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    //Do something with user data
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //Validate Form
    validateForm();
    //Submit data if Valid 
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

//Event Listener
form.addEventListener('submit', processFormData);