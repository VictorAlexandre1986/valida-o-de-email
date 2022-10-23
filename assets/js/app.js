function validate(){
	let form = document.getElementById('form');
	let email = document.getElementById('email').value;
	let text = document.getElementById('text');
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if(email.match(pattern)){
		form.classList.add('valid');
		form.classList.remove('invalid')
		text.innerText = "Seu email é válido";
		text.style.color="#caff50";
	}
	else{
		form.classList.remove('valid');
		form.classList.add('invalid');
		text.innerText = "Por favor insira um email válido";
		text.style.color = "#f44336";
	}

	if (email == ""){
		form.classList.remove('valid');
		form.classList.remove('invalid');
		text.innertText="";
	}
}