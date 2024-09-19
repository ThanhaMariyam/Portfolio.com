var nameerror=document.getElementById('name-error');
var phoneerror=document.getElementById('phone-error');
var emailerror=document.getElementById('email-error');
var messageerror=document.getElementById('message-error');
var submiterror=document.getElementById('submit-error');

function validatename(){
  var name=document.getElementById('contact-name').value;
  if(name.length==0){
    nameerror.innerHTML='Name is required';
    return false;
  }
  nameerror.innerHTML='<i class="bi bi-check-circle-fill"></i>';
  return true;
}
function validatephone(){
    var phone=document.getElementById('contact-number').value;
    if(phone.length==0){
      phoneerror.innerHTML='Number is required';
      return false;
    }
    if(phone.length!==10){
        phoneerror.innerHTML='Enter valid number ';
        return false;
    }
    phoneerror.innerHTML='<i class="bi bi-check-circle-fill"></i>';
    return true;
  }
  function validatemail(){
    var mail=document.getElementById('contact-email').value;
    if(mail.length==0){
      emailerror.innerHTML='Email is required';
      return false;
    }
    if(!mail.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailerror.innerHTML='Email Invalid'
        return false;
    }
    emailerror.innerHTML='<i class="bi bi-check-circle-fill"></i>';
    return true;
  }
  function validatemessage(){
    var message=document.getElementById('contact-msg').value
    var required=30;
    var left=required - message.length;
    if(left>0){
        messageerror.innerHTML=left+'more characters required';
        return false;
    }
    messageerror.innerHTML='<i class="bi bi-check-circle-fill"></i>';
    return true;
  }
   function validateform(){
    if(!validatename() || !validatephone() || !validatemail() || !validatemessage()){
        submiterror.innerHTML='Fix errors to submit';
        return false;
    }
  }