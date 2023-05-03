function openMenu() {
	const elements = document.getElementsByClassName("menu")
	if (elements[1].classList.contains('flex')) {
		elements[0].classList.add('hidden')
		elements[1].classList.add('hidden')
		elements[0].classList.remove('flex')
		elements[1].classList.remove('flex')
	} else {
		elements[0].classList.add('flex')
		elements[1].classList.add('flex')
		elements[0].classList.remove('hidden')
		elements[1].classList.remove('hidden')
	}
}