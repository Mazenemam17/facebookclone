var Email = document.forms['form1'] ['Email']
var Password = document.forms['form1'] ['Password']

var Email_error = document.getElementById('Email_error')
var Pass_error = document.getElementById('Pass_error')

Email.addEventListener('textInput', Email_Verify);
Password.addEventListener('textInput', Email_Verify);

function validated(){
  if (Email.value.length < 9) {
    Email.style.border = "1px solid red";
    Email_error.style.display = "block";
    Email.focus();
    return false;
  }
  if (Password.value.length < 6) {
    Password.style.border = "1px solid red";
    Pass_error.style.display = "block";
    Password.focus();
    return false;
  }

}

function Email_Verify() {
  if (Email.value.length >= 8){
    Email.style.border = "1px solid rgb(186, 180, 180)";
    Email_error.style.display = "none";
    return true;
  }
  if (Password.value.length >= 5){
    Password.style.border = "1px solid rgb(186, 180, 180)";
    Pass_error.style.display = "none";
    return true;
  }
}
