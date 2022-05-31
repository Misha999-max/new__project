const triggerCloseModal = (modalSelector, closeSelector) => {
	const modal = document.querySelector(modalSelector)
	const close = document.querySelectorAll(closeSelector)

	close.forEach(item => {
		item.addEventListener('click', () => {
			modal.style.display = 'none'
		})
	})

	modal.addEventListener('click', e => {
		if (e.target === modal) {
			modal.style.display = 'none'
		}
	})
}

const triggerOpenModal = (triggerSelector, modalSelector) => {
	const modal = document.querySelector(modalSelector)
	const trigger = document.querySelectorAll(triggerSelector)

	trigger.forEach(item => {
		item.addEventListener('click', () => {
			modal.style.display = 'block'
		})
	})
}

const openModal = modalSelector => {
	const modal = document.querySelector(modalSelector)

	modal.style.display = 'block'
}

const closeModal = modalSelector => {
	const modal = document.querySelector(modalSelector)

	modal.style.display = 'none'
}

export { triggerCloseModal, triggerOpenModal, openModal, closeModal }
