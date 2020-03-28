const login = {
	init() {
		this.makeRememberPass();
		this.makeInputsWork();
	},
	makeInputsWork(){
		this.inputs = document.querySelectorAll(".textinput");
		this.inputs.forEach(input => {
			if (input.value.length != 0)
				input.nextElementSibling.classList.add("hadFocus");
			input.addEventListener('focus', (e) => {
				e.target.nextElementSibling.classList.add("hadFocus");
			})
			input.addEventListener('blur', (e) => {
				if(e.target.value.length == 0)
					e.target.nextElementSibling.classList.remove("hadFocus");
			})
		});
	},
	makeRememberPass(){
		this.remember = document.querySelector("a[href='rememberPass']");
		console.log(this.remember)
		this.remember.addEventListener('click', (e)=>{
			e.preventDefault();
		})
	}
}

export default login