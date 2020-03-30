const accounts = {
	init() {
		let elems = document.querySelectorAll('.accounts--image');
		console.log(elems)
		elems.forEach(elem=>{
			elem.addEventListener("click", e => {
				if(!elem.classList.contains("anim")){
					elem.classList.add("anim");
					console.log("mouseover", elem)
					setTimeout(() => {
						console.log("there is a sec")
						elem.classList.remove("anim");
					}, 1000);
				}
			})
		})
	}
}

export default accounts