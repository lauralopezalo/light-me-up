// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	let message = "";

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");

	// Validate fields entered by the user: name, phone, password, and email
	if (
		fName.value == "" ||
		fName.value.length < 3 ||
		/^\s+$/.test(fName.value) ||
		!/^([A-ZZÁÉÍÓÚa-zñáéíóú]+[\s]*)+$/.test(fName.value)
	) {
		error++;
		fName.style.border = "2px solid red";
		document.getElementById("errorName").style.display = "block";
	} else {
		fName.style.border = "2px solid green";
		document.getElementById("errorName").style.display = "none";
	}

	if (
		fLastN.value == "" ||
		fLastN.value.length < 3 ||
		/^\s+$/.test(fLastN.value) ||
		!/^([A-ZZÁÉÍÓÚa-zñáéíóú]+[\s]*)+$/.test(fLastN.value)
	) {
		error++;
		fLastN.style.border = "2px solid red";
		document.getElementById("errorLastN").style.display = "block";
	} else {
		fLastN.style.border = "2px solid green";
		document.getElementById("errorLastN").style.display = "none";
	}

	if (
		fEmail.value == "" ||
		fEmail.value.length < 3 ||
		/^\s+$/.test(fEmail.value) ||
		!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)
	) {
		error++;
		fEmail.style.border = "2px solid red";
		document.getElementById("errorEmail").style.display = "block";
	} else {
		fEmail.style.border = "2px solid green";
		document.getElementById("errorEmail").style.display = "none";
	}

	if (
		fPassword.value == "" ||
		!/^(?=.*\d)(?=.*[a-zA-Z]).{3,}$/.test(fPassword.value)
	) {
		error++;
		fPassword.style.border = "2px solid red";
		document.getElementById("errorPassword").style.display = "block";
	} else {
		fPassword.style.border = "2px solid green";
		document.getElementById("errorPassword").style.display = "none";
	}

	if (
		fAddress.value == "" ||
		fAddress.value.length < 3 ||
		/^\s+$/.test(fAddress.value)
	) {
		error++;
		fAddress.style.border = "2px solid red";
		document.getElementById("errorAddress").style.display = "block";
	} else {
		fAddress.style.border = "2px solid green";
		document.getElementById("errorAddress").style.display = "none";
	}

	if (
		fPhone.value == "" ||
		fPhone.value.length < 3 ||
		!/^\d{9}$/.test(fPhone.value)
	) {
		error++;
		fPhone.style.border = "2px solid red";
		document.getElementById("errorPhone").style.display = "block";
	} else {
		fPhone.style.border = "2px solid green";
		document.getElementById("errorPhone").style.display = "none";
	}

	if (error > 0) {
		alert("error");
	} else {
		alert("OK");
	}
}
