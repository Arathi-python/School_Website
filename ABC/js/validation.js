function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        document.getElementById('emailerrorman').innerHTML = "";
        document.getElementById('emailerror').innerHTML = "";
        return true;
    }
    else {
      
        if (document.getElementById('email').value == "") {
        
            document.getElementById('emailerrorman').innerHTML = "Email is mandatory";
            document.getElementById('emailerror').innerHTML = "";
            document.getElementById('email').focus();
            return false;
        }
        else {
        
            document.getElementById('emailerrorman').innerHTML = "";
            document.getElementById('emailerror').innerHTML = "Please enter a valid email address.";
            document.getElementById('email').focus();
            return false;
        }
    }
}


function checkmobile(inputtxt) {
    var numbers = /^[0-9]+$/;
    if (inputtxt.value.match(numbers)) {
        document.getElementById('mobilenumbererror').innerHTML = "";
        document.getElementById('mobilenumbererrorman').innerHTML = "";
        return true;
    }
    else {
        if (document.getElementById('mobilenumber').value == "") {
            document.getElementById('mobilenumbererrorman').innerHTML = "Mobile number is mandatory";
            document.getElementById('mobilenumbererror').innerHTML = "";
            document.getElementById('mobilenumber').focus();
            return false;
        }
        else {
            document.getElementById('mobilenumbererrorman').innerHTML = "";
            document.getElementById('mobilenumbererror').innerHTML = "Please enter a valid mobile number.";
            document.getElementById('mobilenumber').focus();
            return false;
        }
       
    }
}

function mandatory()
{
   
    if (document.getElementById('name').value == "") {
        document.getElementById('nameerror').innerHTML = "Full name is mandatory.";
        document.getElementById('name').focus();
        return false;
    }
    else {
       
        document.getElementById('nameerror').innerHTML = "";
        return true;
    }

    if (document.getElementById('email').value == "") {
        document.getElementById('emailerrorman').innerHTML = "Email is mandatory";
        document.getElementById('emailerror').innerHTML = "";
        document.getElementById('email').focus();
        return false;
    }
    else {
        document.getElementById('emailerrorman').innerHTML = "";
        return true;}
  

    if (document.getElementById('mobilenumber').value == "") {
        document.getElementById('mobilenumbererrorman').innerHTML = "Mobile number is mandatory";
        document.getElementById('mobilenumber').focus();
        return false;
    }
    else {
        document.getElementById('mobilenumbererror').innerHTML = "";
        return true;
    }
    
}


function clearpage() {

    document.getElementById("RegistrationForm").reset();
   
}