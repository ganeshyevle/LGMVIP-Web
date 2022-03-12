var SR = null
function OFS1() {
	alert("Are you sure your information is correct? If so, click on the OK button?");
}
function OFS() {
	if (validate()) {
		var formData = RFD();
		if (SR == null)
			INR(formData);
		else
			UR(formData);
		RF();
	}
}
function RFD() {
	var formData = {};
	formData["name"] = document.getElementById("name").value;
	formData["mobile"] = document.getElementById("mobile").value;
	formData["email"] = document.getElementById("email").value;
	formData["address"] = document.getElementById("address").value;
	formData["gender"] = document.getElementById("gender").value;
	formData["skill"] = document.getElementById("skill").value;
	return formData;
}

function INR(data) {
	var table = document.getElementById("SL").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.name;
	cell3 = newRow.insertCell(1);
	cell3.innerHTML = data.mobile;
	cell4 = newRow.insertCell(2);
	cell4.innerHTML = data.email;
	cell2 = newRow.insertCell(3);
	cell2.innerHTML = data.address;
	cell5 = newRow.insertCell(4);
	cell5.innerHTML = data.gender;
	cell6 = newRow.insertCell(5);
	cell6.innerHTML = data.skill;
	cell7 = newRow.insertCell(6);
	cell7.innerHTML = `<a onClick="OE(this)">Edit Info</a>
						<a onClick="OD(this)">Delete Info</a>`;
}

function RF() {
	document.getElementById("name").value = "";
	document.getElementById("mobile").value = "";
	document.getElementById("email").value = "";
	document.getElementById("address").value = "";
	document.getElementById("gender").value = "";
	document.getElementById("skill").value = "";
	SR = null;
}

function OE(td) {
	SR = td.parentElement.parentElement;
	document.getElementById("name").value = SR.cells[0].innerHTML;
	document.getElementById("mobile").value = SR.cells[1].innerHTML;
	document.getElementById("email").value = SR.cells[2].innerHTML;
	document.getElementById("address").value = SR.cells[3].innerHTML;
	document.getElementById("gender").value = SR.cells[4].innerHTML;
	document.getElementById("skill").value = SR.cells[5].innerHTML;
}
function UR(formData) {
	SR.cells[0].innerHTML = formData.name;
	SR.cells[1].innerHTML = formData.mobile;
	SR.cells[2].innerHTML = formData.email;
	SR.cells[3].innerHTML = formData.address;
	SR.cells[4].innerHTML = formData.gender;
	SR.cells[5].innerHTML = formData.skill;
}

function OD(td) {
	if (confirm('Are you sure to delete this record ?')) {
		row = td.parentElement.parentElement;
		document.getElementById("SL").deleteRow(row.rowIndex);
		RF();
	}
}
function validate() {
	isValid = true;
	if (document.getElementById("name").value == "") {
		isValid = false;
		document.getElementById("NVE").classList.remove("hide");
	} else {
		isValid = true;
		if (!document.getElementById("NVE").classList.contains("hide"))
			document.getElementById("NVE").classList.add("hide");
	}
	return isValid;
}	