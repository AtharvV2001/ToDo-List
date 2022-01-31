// Function for Check Validation in Registration Form
function check_valid() {
    // Access the Inputed Value
    let iemail = document.getElementById('email').value;
    let ipwd = document.getElementById('pwd').value;
    let iconpwd = document.getElementById('conpwd').value;
    let iname = document.getElementById('name').value;

    let ename = "", eemail = "", epwd = "", ecompwd = "";
    let ncn = 0, ecn = 0, pcn = 0, cpcn = 0, mcn = 0;

    // Check Validation for blank Field
    if (iname == "" && iemail == "" && ipwd == "" && iconpwd == "") {
        document.getElementById('error-name').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Please fill this field</div>';
        document.getElementById('error-email').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Please fill this field</div>';
        document.getElementById('error-pwd').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Please fill this field</div>';
        document.getElementById('error-conpwd').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Please fill this field</div>';
        return 0;
    }

    if (iname == "") {
        document.getElementById('error-name').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Please fill this field</div>';
    }
    if (iname != "") {
        document.getElementById('error-name').innerHTML = "";
        mcn++;
    }

    // Check for email field
    let regexForEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (iemail == "") {
        document.getElementById('error-email').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Please fill this field</div>';
        ecn = 1;
    }
    if (regexForEmail.test(iemail) != true && ecn != 1) {
        document.getElementById('error-email').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Enter vaild Email ID</div>';
    }
    if (regexForEmail.test(iemail) && ecn != 1) {
        document.getElementById('error-email').innerHTML = "";
        mcn++;
    }

    // Validtion for Password
    let regexForCaps = /[A-Z]/g;
    let regexForNumber = /[0-9]/g;
    let regexForSpeChar = /\W/g;

    if (ipwd == "") {
        document.getElementById('error-pwd').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Please fill this field</div>';
        pcn = 1;
    }

    if (ipwd.length < 8 && pcn != 1) {
        epwd += "Password must have 8 Char.<br>";
        pcn = 2;
    }
    if (regexForCaps.test(ipwd) != true && pcn != 1) {
        epwd += "Password must have 1 Capital Letter.<br>";
        pcn = 2;
    }
    if (regexForNumber.test(ipwd) != true && pcn != 1) {
        epwd += "password must have 1 Number.<br>";
        pcn = 2;
    }
    if (regexForSpeChar.test(ipwd) != true && pcn != 1) {
        epwd += "Password must have 1 Special Char.<br>";
        pcn = 2;
    }
    if (pcn == 2) {
        document.getElementById('error-pwd').innerHTML = '<div class="alert alert-danger errorshow" role="alert">' + epwd + '</div>';
    }

    if (pcn != 1 && pcn != 2) {
        document.getElementById('error-pwd').innerHTML = "";
        mcn++;
    }

    // Validation for Confirm Password
    if(iconpwd == ""){
        document.getElementById('error-conpwd').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Please fill this field</div>';
        cpcn = 1;
    }
    if(iconpwd != ipwd && cpcn !=1){
        document.getElementById('error-conpwd').innerHTML = '<div class="alert alert-danger errorshow" role="alert">Confirm Password must match with Password</div>';
    }
    if(iconpwd == ipwd && cpcn !=1){
        document.getElementById('error-conpwd').innerHTML = "";
        mcn++;
    }
    if(mcn != 4)return 0;

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
    if(myToDoList.length == 0){
        document.getElementById('empty-list').style.display = "block";
    }
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
    if (titles != "" && dec != "") {
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
        if(myToDoList.length == 1){
            document.getElementById('empty-list').style.display = "none";
        }
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
    if (titles != "" && dec != "") {
        myToDoList[id].title = titles;
        myToDoList[id].desc = dec;

        localStorage.setItem('ToDo-storage', JSON.stringify(myToDoList));

        document.getElementById('title' + id).innerText = titles;
        document.getElementById('desc' + id).innerText = dec;
    } else {
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

    if(myToDoList.length == 0){
        document.getElementById('empty-list').style.display = "block";
    }

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