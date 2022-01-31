// Function for Check Validation in Registration Form
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
    if (iemail == "" && iname == "" && iconpwd == "" && ipwd == "") {
        msg = "Fill all Fields";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    if (iname == "") {
        msg = "Fill Name Field";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    if (iemail == "") {
        msg = "Fill Email Fields";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    if (ipwd == "") {
        msg = "Fill Password Fields";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    if (iconpwd == "") {
        msg = "Fill Confirm Password Fields";
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
    // Test for more than 8 char
    if (ipwd.length <= 8) {
        msg = "Password must have 8 Char.";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    // Test for Capital Letter
    if (regexForCaps.test(ipwd) != true) {
        msg = "Password must have Capital Letter";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    // Test for Numbers
    if (regexForNumber.test(ipwd) != true) {
        msg = "Password must have Number";
        errorB.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"  style="height: 30px; padding-top: 0%;">' + msg + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="height: 30px; padding: 0; padding-right: 10px;"></button></div>'
        return 0;
    }
    // Test for special char
    if (regexForSpeChar.test(ipwd) != true) {
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
    document.getElementById('input-name').innerText = iname;
    document.getElementById('regi').style.display = "none";
    document.getElementById('todos').style.display = "block";
    show();
}

// js Code for ToDo list Section
let myToDoList = JSON.parse(localStorage.getItem('ToDo-storage'));


// Show Existing Items in List
function show() {
    for (let i = 0; i < myToDoList.length; i++) {
        const num = i;
        const titles = myToDoList[i].title;
        const dec = myToDoList[i].desc;
        display_list(num, titles, dec);
    }

}

// Adding new item in list and displaying
function addItem() {
    const num = myToDoList.length;
    const titles = document.getElementById('titlea').value;
    const dec = document.getElementById('desca').value;
    if (titles != "" || dec != "") {
        let tempObj = {
            'id': num,
            'title': titles,
            'desc': dec
        }
        myToDoList.push(tempObj);
        localStorage.setItem('ToDo-storage', JSON.stringify(myToDoList));
        display_list(num, titles, dec);
        document.getElementById('titlea').value = "";
        document.getElementById('desca').value = "";
    } else {
        return 0;
    }
}


// Display Item in List
function display_list(a, b, c) {
    let ele = document.getElementById('todo-list');
    const tempele = document.createElement('li');

    ele.appendChild(tempele);

    let lc = ele.lastChild;
    lc.id = "item" + a;
    cl = ['list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'list-item']
    lc.classList.add(...cl);
    lc.innerHTML = '<div class="ms-2 me-auto" style="max-width: 550px;"><div class="fw-bold fs-5" id="title' + a + '">' + b + '</div><span id="desc' + a + '">' + c + '</span></div><div class="badge rounded-pill fs-5 list-btn hov" data-bs-toggle="modal" data-bs-target="#edit-item" onclick="display_edit(' + a + ')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div class="badge rounded-pill fs-5 ms-3 list-btn hov" data-bs-toggle="modal" data-bs-target="#delete-item" onclick="display_delete(' + a + ')"><i class="fa fa-trash-o" aria-hidden="true"></i></div>'
}

// Editing exsiting Item in list and displaying
function display_edit(id) {
    document.getElementById('ide').value = id
    document.getElementById('titlee').value = myToDoList[id].title;
    document.getElementById('desce').value = myToDoList[id].desc;
}

function editItem() {
    const titles = document.getElementById('titlee').value;
    const dec = document.getElementById('desce').value;
    const id = document.getElementById('ide').value;
    if (titles != "" || dec != "") {
        myToDoList[id].title = titles;
        myToDoList[id].desc = dec;

        localStorage.setItem('ToDo-storage', JSON.stringify(myToDoList));

        document.getElementById('title' + id).innerText = titles;
        document.getElementById('desc' + id).innerText = dec;
    }else{
        return 0;
    }

}

// Deleting exsiting Item from list and removing from display
function display_delete(id) {
    document.getElementById('idd').value = id;
}

function deleteItem() {
    const id = Number.parseInt(document.getElementById('idd').value);

    let tempArr1 = myToDoList.slice(0, id);
    let tempArr2 = myToDoList.slice(id + 1, myToDoList.length);

    myToDoList = tempArr1.concat(tempArr2);

    localStorage.setItem('ToDo-storage', JSON.stringify(myToDoList));

    showadel(myToDoList);
}

function showadel(x) {
    document.getElementById('todo-list').innerHTML = "";
    for (let i = 0; i < x.length; i++) {
        const num = i;
        const titles = x[i].title;
        const dec = x[i].desc;
        display_list(num, titles, dec);
    }

}