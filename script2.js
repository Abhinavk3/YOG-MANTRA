/*var cardError = document.getElementById('card-error');







function validate_creditcardnumber(){

	var card = document.getElementById('cardNO').value;
	if(card.length == 0){
		cardError.innerHTML = "<b><center><font color=red>Please enter your 16 digit credit card numbers</font></center></b>";
		return false;
	}
	if(card.length !==  16){
		cardError.innerHTML = "<b><center><font color=red>card no. should be 16 digits</font></center></b>";
		return false;
	}
	if(!phone.match(/^[0-9]{16}$/)){
		cardError.innerHTML = "<b><center><font color=red>card no. is required</font></center></b>";
		return false;
	}
	cardError.innerHTML = '<i class="fa-solid fa-circle-check" color: seagreen></i>';
	return true;

}*/