var nameError = document.getElementById('name-error');
var mobileError = document.getElementById('mobile-error');
var emailError = document.getElementById('email-error');
var dateError = document.getElementById('date-error');
var areaError = document.getElementById('area-error');
var cityError = document.getElementById('city-error');
var stateError = document.getElementById('state-error');
var postalError = document.getElementById('postal-error');
var submitError = document.getElementById('submit-error');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


function validateName(){

	var name = document.getElementById('name').value;

	if(name.length == 0){
		nameError.innerHTML = "<b><center><font color=red>Please provide your Name!</font></center></b>";
		return false;
	}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
		nameError.innerHTML = "<b><center><font color=red>Please provide full Name</font></center></b>";
		return false;
	}
	nameError.innerHTML = '<i class="fa-solid fa-circle-check" color: seagreen></i>';
	return true;
}

function validatePhone(){
	var phone = document.getElementById('phone').value; 

	if(phone.length == 0){
		mobileError.innerHTML = "<b><center><font color=red>Phone no. is required</font></center></b>";

		return false;
	}
	if(phone.length !==  10){
		mobileError.innerHTML = "<b><center><font color=red>Phone no. should be 10 digits</font></center></b>";
		return false;
	}
	if(!phone.match(/^[0-9]{10}$/)){
		mobileError.innerHTML = "<b><center><font color=red>Phone no. is required</font></center></b>";
		return false;
	}

	mobileError.innerHTML = '<i class="fa-solid fa-circle-check" color: seagreen></i>';
	return true;
}

function validateEmail(){
	var email = document.getElementById('email').value;

	if(email.length == 0){
		emailError.innerHTML = "<b><center><font color=red>Please provide your Email!</font></center></b>";
		return false;
	}
	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		emailError.innerHTML = "<b><center><font color=red>Email invalid !</font></center></b>";
		return false;
	}
	emailError.innerHTML = '<i class="fa-solid fa-circle-check" color: seagreen></i>';
	return true;
}

function validateState(){
	var state= document.getElementById('state').value;
		if(state.length == 0){
			stateError.innerHTML = "<b><center><font color=red>Please provide your State!</font></center></b>";
			return false;
		}
		stateError.innerHTML = '<i class="fa-solid fa-circle-check" color: seagreen></i>';
	return true;
}


function validateArea(){
	var area= document.getElementById('area').value;
		if(area.length == 0){
			areaError.innerHTML = "<b><center><font color=red>Please provide your area!</font></center></b>";
			return false;
		}
		areaError.innerHTML = '<i class="fa-solid fa-circle-check" color: seagreen></i>';
	return true;
}

function validateCity(){
	var city= document.getElementById('city').value;
		if(city.length == 0){
			cityError.innerHTML = "<b><center><font color=red>Please provide your city!</font></center></b>";
			return false;
		}
		cityError.innerHTML = '<i class="fa-solid fa-circle-check" color: seagreen></i>';
	return true;
}
		
	





function checkIfAvailable(zip)
{
  let zones = ["10001","10002","10003","10004","10005"]
  return( zones.indexOf(zip) >= 0 )
}

function validateZip()
{
  let zip = document.getElementById("zipCode").value;
  let msg =""
  if(checkIfAvailable(zip))
    {
      msg="Our service is available in this area!";
    }
   else
     {
       msg="Sorry; our service is not available in this area";
     }
    document.getElementById("msg").innerHTML = msg;
}


function validateForm2(){
	if(!validateName() && !validatePhone() && !validateEmail()  && !validateState() && !validateArea() && !validateCity() ){
		submitError.innerHTML = "<b><center><font color=red>Please fill all the details</font></center></b>";
		return false;
	}
	submitError.innerHTML = "<b><center><font color=green >Session Booked!!</font></center></b>";
	window.location.href="payment/payment.html";
	return true;
	
}

document.querySelector('.btn btn-success btn-appointment').addEventListener('click', () =>  
{  
   document.location.href = 'payment.html'; 
}); 








