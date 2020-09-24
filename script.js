function validateForm(){
  var firstName = document.myForm.MiddleName.value;
  var middleName = document.myForm.MiddleName.value;
  var lastName = document.myForm.LastName.value;
  var email = document.myForm.Email.value;
  var phone = document.myForm.Phone.value;


  var letters = /^[A-Za-z]+$/;
  var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var number = /^\d{10}$/;

	if(firstName.match(letters)){
		if(middleName.match(letters) || middleName=""){
			if(lastName.match(letters)){
				if(email.match(mail)){
					if(phone.match(number)){
            var firstName = document.getElementById("FirstName").value;
            var middleName = document.getElementById("MiddleName").value;
            var lastName = document.getElementById("LastName").value;
            var email = document.getElementById("Email").value;
            var address = document.getElementById("Address").value;
            var phone = document.getElementById("Phone").value;

            localStorage.setItem("firstName", firstName);
            localStorage.setItem("middleName", middleName);
            localStorage.setItem("lastName", lastName);
            localStorage.setItem("email", email);
            localStorage.setItem("address", address);
            localStorage.setItem("phone", phone);
						return true;
  				}else{
  					alert("Error: Eeither the Phone number is not up or you entered a non-digits");
   					return false;
   				}
  			}else{
  				alert("Invalid email format");
   				return false;
   			}
  		}else{
  			alert("Last name should be alphabets");
   			return false;
  		}
  	}else{
  		alert("Middle name should be alphabets");
   		return false;
  	}
  }else{
  	alert("First name should be alphabets");
   	return false;
  }
}
