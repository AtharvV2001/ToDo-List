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
    if (iemail == "" || iname == "" || iconpwd == "" || ipwd == "") {
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
// let myToDoList = JSON.parse(localStorage.temp);
let myArr = [
    // {
    //     'id': 0,
    //     'title': 'Task 1',
    //     'desc': 'Description 1'
    // },
    // {
    //     'id': 1,
    //     'title': 'Task 2',
    //     'desc': 'Description 2'
    // },
    // {
    //     'id': 2,
    //     'title': 'Task 3',
    //     'desc': 'Description 3'
    // }
];


// Show Existing Items in List
function show() {
    for (let i = 0; i < myArr.length; i++) {
        const num = myArr[i].id;
        const titles = myArr[i].title;
        const dec = myArr[i].desc;
        display_list(num, titles, dec);
    }

}

// Adding new item in list and displaying
function addItem() {
    const num = myArr.length;
    const titles = document.getElementById('titlea').value;
    const dec = document.getElementById('desca').value;
    if (titles != "" || dec != "") {
        let tempObj = {
            'id': num,
            'title': titles,
            'desc': dec
        }
        myArr.push(tempObj);
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
    lc.innerHTML = '<div class="ms-2 me-auto" style="max-width: 550px;"><div class="fw-bold fs-5" id="title' + a + '">' + b + '</div><span id="desc' + a + '">' + c + '</span></div><div class="badge rounded-pill fs-5 list-btn hov" data-bs-toggle="modal" data-bs-target="#edit-item" onclick="display_edit(' + a + ')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div class="badge rounded-pill fs-5 ms-3 list-btn hov" data-bs-toggle="modal" data-bs-target="#delete-item"><i class="fa fa-trash-o" aria-hidden="true"></i></div>'
}

// Editing exsiting Item in list and displaying
function display_edit(id) {
    let titles = document.getElementById('title' + id).innerText;
    let dec = document.getElementById('desc' + id).innerText;

    document.getElementById('titlee').value = titles;
    document.getElementById('desce').value = dec;
}