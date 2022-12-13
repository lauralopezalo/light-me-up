// Exercise 6
function validate() {
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");


	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");

	// Validate fields entered by the user: name, phone, password, and email
	if (
		fName.value == "" ||
		fName.value.length < 3 ||
		/^\s+$/.test(fName.value) ||
		!/^([A-ZZÁÉÍÓÚa-zñáéíóú]+[\s]*)+$/.test(fName.value)
	) {
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
		fPhone.style.border = "2px solid red";
		document.getElementById("errorPhone").style.display = "block";
	} else {
		fPhone.style.border = "2px solid green";
		document.getElementById("errorPhone").style.display = "none";
	}

}
