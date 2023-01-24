
const input_form  = document.getElementById('form-input');
const text_input  = document.getElementById('text-input');
const error_email = document.getElementById('error-msg');
console.log(error_email);

input_form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let userVal = text_input.value;
    console.log(userVal);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userVal)){
        error_email.style.display = "none";
        userVal = '';
    } else {
        error_email.style.display = "block";
        return (false);
    }
})