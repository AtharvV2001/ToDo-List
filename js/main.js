function check_valid() {
    // Access the Inputed Value
    let iemail = document.getElementById('email').value;
    let ipwd = document.getElementById('pwd').value;
    let iconpwd = document.getElementById('conpwd').value;
    let iname = document.getElementById('name').value;

    // To Show Alert in case of Error
    let msg;
    let errorB = document.getElementById('display-error');

    // Check for blank Field
    if(iemail == "" || iname == "" || iconpwd == "" || ipwd == ""){
        msg = "Fill all Fields";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }

    // Regular Expression for email
    let RegEmail = /\w+@[a-z]+.com/;

    // Test for Email ID
    if (RegEmail.test(iemail) != true) {
        msg = "Invalid Email ID";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }

    // Regular Expression for password
    let regexForCaps = /[A-Z]/g;
    let regexForNumber = /[0-9]/g;
    let regexForSpeChar = /\W/g;

    // Tests for Password
    if (ipwd.length <= 8) {
        msg = "Password must have 8 Char.";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    if (regexForCaps.test(ipwd)!=true) {
        msg = "Password must have Capital Letter";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    if (regexForNumber.test(ipwd)!=true) {
        msg = "Password must have Number";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    if (regexForSpeChar.test(ipwd)!=true) {
        msg = "Password must have Special Char";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }

    // Test Confrim Password
    if (iconpwd != ipwd) {
        msg = "Confirm Password Must be Same";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }

    // If All Validation Checked
    document.getElementById('register-form').submit();
}