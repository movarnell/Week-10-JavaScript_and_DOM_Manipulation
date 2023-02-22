let empTable = document.getElementById("empTable");

function createEmp() {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let jobTitle = document.getElementById("jobTitle").value;
    let fNameCol = document.createElement("td");
    let lNameCol = document.createElement("td");
    let jobTitleCol = document.createElement("td");
    let buttonCol = document.createElement("td");

    fNameCol.innerText = fName;
    lNameCol.innerText = lName;
    jobTitleCol.innerText = jobTitle;

    let button = document.createElement("button");
    button.classList = "btn btn-danger";
    button.innerText = "Delete";
    button.addEventListener("click", function () {
        deleteRow(formRow);
    });

    buttonCol.appendChild(button);

    let formRow = empTable.insertRow(1);
    formRow.appendChild(fNameCol);
    formRow.appendChild(lNameCol);
    formRow.appendChild(jobTitleCol);
    formRow.appendChild(buttonCol);

    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("jobTitle").value = "";
}

function deleteRow(row) {
    empTable.deleteRow(row.rowIndex);
}
