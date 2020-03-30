const login = {
	init() {
		this.makeRememberPass();
		this.makeInputsWork();
		this.makeChange();
		this.validate();
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
		if(this.remember == undefined) return
		function createElement() {
			const div = document.createElement("div");
			div.innerHTML = "Возможность восстановить пароль пока недоступна. Обратитесь в техническую поддержку.";
			div.style.width = "450px";
			div.style.position = "absolute";
			div.style.left = "50%";
			div.style.bottom = "-90px";
			div.style.transform = "translateX(-50%)";
			div.style.textAlign = "center";
			div.style.background = "rgba(0,0,0,.8)";
			div.style.borderRadius = "5px";
			div.style.padding = "10px 15px";
			div.style.display = "none";
			return div;
		}
		let isThere = false;
		let timeout;
		const div = createElement();
		this.remember.addEventListener('click', (e)=>{
			e.preventDefault();
			e.target.append(div);
			if(!isThere){
				e.target.classList.add("message");
				div.style.display = "block";
				isThere = true;
				timeout = setTimeout(() => {
					e.target.classList.remove("message");
					div.style.display = "none";
					isThere = false;
				}, 3000);
			} else {
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					e.target.classList.remove("message");
					div.style.display = "none";
					isThere = false;
				}, 3000);
			}
		})
	},
	makeChange(){
		const change = document.querySelectorAll(".change");
		const login = document.querySelector(".login--form--login");
		const register = document.querySelector(".login--form--register");
		change.forEach(elem=>{
			elem.addEventListener('click', (e)=>{
				login.classList.toggle("hide");
				register.classList.toggle("hide");
			});
		});
	},
	validate(){

		const loginElems = {
			email: document.querySelector(".login--form--login .login--username"),
			password: document.querySelector(".login--form--login .login--password"),
			remember: document.querySelector(".login--form--login .login--chbx"),
		}

		const regElems = {
			firstname: document.querySelector(".login--form--register .login--firstname .textinput"),
			lastname: document.querySelector(".login--form--register .login--lastname .textinput"),
			email: document.querySelector(".login--form--register .login--username .textinput"),
			password: document.querySelector(".login--form--register .login--password .textinput"),
			secondpassword: document.querySelector(".login--form--register .login--secondpassword .textinput"),
		}

		const login = document.querySelector(".login--form--login .login--submit input");
		const register = document.querySelector(".login--form--register .login--submit input");

		function reject(element, e, error = null) {
			e.preventDefault();
			console.log("Виноват:", element);
			element.classList.add('error');
			element.addEventListener('focus', e=>{
				e.target.classList.remove('error');
			})
		}
		register &&
		register.addEventListener('click', e => {
			for(let elem in regElems){
				regElems[elem].classList.remove('error');
			}
			// e.preventDefault();
			const emailRegExp =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			console.log(regElems.firstname)
			if (regElems.firstname.value.length < 3) reject(regElems.firstname, e);
			if (regElems.lastname.value.length < 3) reject(regElems.lastname, e);
			if (emailRegExp.exec(regElems.email.value) == null) reject(regElems.email, e);
			if (regElems.password.value.length < 7) reject(regElems.password, e);
			if (regElems.password.value != regElems.secondpassword.value) reject(regElems.secondpassword, e);
		});

		console.log(login, register)
	}
}

export default login