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
	}
}

export default login