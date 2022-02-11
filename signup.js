const createAccount = document.querySelector('.createAccount')
const pass = document.querySelector('#pass')
const conPasswrd = document.querySelector('#confirmPass')


function confirmPassword(){
    if (pass.value != conPasswrd.value){
        alert("Passwords do not match.");
        return false;
    }
   
    console.log(ferst.value);
    //console.log(conPasswrd.value)
}

createAccount.addEventListener('click', confirmPassword);
