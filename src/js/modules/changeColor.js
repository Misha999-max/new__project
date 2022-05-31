const changeColorBtnPartner = (btnRight, btnLeft) => {
	const btnR = document.querySelector(btnRight)
	const btnL = document.querySelector(btnLeft)

	btnR.addEventListener('click', () => {
		btnR.style.color = 'orange'
		btnL.style.color = 'black'
	})

	btnL.addEventListener('click', () => {
		btnL.style.color = 'orange'
		btnR.style.color = 'black'
	})
}

export { changeColorBtnPartner }
