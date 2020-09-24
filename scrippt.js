var firstName = localStorage.getItem("firstName");
var middleName = localStorage.getItem("middleName");
var lastName = localStorage.getItem("lastName");
var email = localStorage.getItem("email");
var address = localStorage.getItem("address");
var phone = localStorage.getItem("phone");

if (middleName = ""){
	document.getElementById("name").value = firstName+' '+lastName;
}else{
	document.getElementById("name").innerHTML = firstName+' '+middleName+' '+lastName;
}
document.getElementById("phone").innerHTML = phone;
document.getElementById("email").innerHTML = email;
document.getElementById("address").innerHTML = address;