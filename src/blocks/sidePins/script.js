const sidePins = {
	init() {
		const wrapper = document.querySelector(".pins");
		const elems = document.getElementsByClassName("pins--item");
		for(let i = 0; i < elems.length; i++){
			elems[i].addEventListener("click", (e)=>{
				console.log(elems[i])
				for (let j = 0; j < elems.length; j++) {
					elems[j].classList.remove("active");
				}
				e.target.classList.add("active");
			})
		}
	}
}

export default sidePins