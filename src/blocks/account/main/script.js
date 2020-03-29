const main = {
	init() {
		let elems = document.querySelectorAll('.item--refresh');
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

export default main