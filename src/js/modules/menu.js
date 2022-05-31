const openMenu = (triggerSelector, menuSelector) => {
	const menu = document.querySelector(menuSelector)
	const trigger = document.querySelector(triggerSelector)

	trigger.addEventListener('click', () => {
		menu.classList.add('active')
	})
}

const closeMenu = (closeSeletor, menuSelector) => {
	const menu = document.querySelector(menuSelector)
	const close = document.querySelector(closeSeletor)

	close.addEventListener('click', () => {
		menu.classList.remove('active')
		removeAnimationGamburger()
	})

	menu.addEventListener('click', e => {
		if (e.target === menu) {
			menu.classList.remove('active')
			removeAnimationGamburger()
		}
	})
}

const AnimationGamburger = () => {
	const gamburger = document.querySelector('.header-menu')

	gamburger.addEventListener('click', () => {
		gamburger.classList.add('active')
	})
}

const removeAnimationGamburger = () => {
	const gamburger = document.querySelector('.header-menu')

	gamburger.classList.remove('active')
}

export { closeMenu, openMenu, AnimationGamburger }
