// Открытие доп. меню в хэдере
document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header')
	const menuItems = document.querySelectorAll('.menu__list__item._more')
	const menuSublists = document.querySelectorAll('.menu__sublist')

	menuItems.forEach((menuItem, index) => {
		menuItem.addEventListener('click', e => {
			e.stopPropagation()

			const menuSublist = menuSublists[index]
			const isAlreadyOpened = menuItem.classList.contains('opened')

			menuItems.forEach((item, idx) => {
				const sublist = menuSublists[idx]
				header.classList.remove('opened')
				sublist.classList.remove('opened')
				item.classList.remove('opened')
			})

			if (!isAlreadyOpened) {
				header.classList.add('opened')
				menuSublist.classList.add('opened')
				menuItem.classList.add('opened')
			}
		})
	})

	document.addEventListener('click', e => {
		if (
			!e.target.closest('.menu__list__item._more') &&
			!e.target.closest('.menu__sublist')
		) {
			menuItems.forEach((menuItem, index) => {
				const menuSublist = menuSublists[index]
				header.classList.remove('opened')
				menuSublist.classList.remove('opened')
				menuItem.classList.remove('opened')
			})
		}
	})
})

// Открытие доп. меню в хэдере (гамбурегр)
document.addEventListener('DOMContentLoaded', () => {
	// Открытие доп. меню в хэдере (гамбурегр)
	const seeMoreBtns = document.querySelectorAll('.ham__menu__list__item.__more')
	const tabsWrapper = document.querySelector('.tabs__wrapper')
	const backBtns = document.querySelectorAll('.back__btn')

	if (!seeMoreBtns.length || !tabsWrapper || !backBtns) return

	let offsetX = 0
	let currentIndex = 0

	tabsWrapper.style.transition = 'transform 0.3s ease-in-out'

	seeMoreBtns.forEach((seeMoreBtn, index) => {
		seeMoreBtn.addEventListener('click', event => {
			event.preventDefault()

			currentIndex = index + 1
			offsetX = -100 * currentIndex
			tabsWrapper.style.transform = `translateX(${offsetX}%)`
		})
	})

	backBtns.forEach(backBtn => {
		backBtn.addEventListener('click', event => {
			event.preventDefault()

			if (currentIndex > 0) {
				currentIndex--
				offsetX = -100 * currentIndex
				tabsWrapper.style.transform = `translateX(${offsetX}%)`
			}
		})
	})

	// Открытие / Закрытие гамбургер меню
	const burgerMenu = document.querySelector('.hamburger__menu')
	const openBurgerBtn = document.querySelector('.hamburger')
	const closeBurgerBtn = document.querySelector('.close__ham__btn')
	const tabs = document.querySelectorAll('.tab')
	const overlay = document.querySelector('.overlay')
	const html = document.querySelector('html')
	const marquee = document.querySelector('.marquee__wrapper')

	openBurgerBtn.addEventListener('click', () => {
		burgerMenu.classList.toggle('active')
		overlay.classList.toggle('active')
		marquee.classList.toggle('active')
		html.classList.toggle('of__hidden')

		tabs.forEach(tab => {
			tab.classList.toggle('active')
		})
	})
	closeBurgerBtn.addEventListener('click', () => {
		offsetX = 0
		tabsWrapper.style.transform = `translateX(${offsetX}%)`

		burgerMenu.classList.remove('active')
		tabs.forEach(tab => {
			tab.classList.remove('active')
		})
		setTimeout(() => {
			marquee.classList.remove('active')
		}, 1000)
		html.classList.remove('overflow_hidden')
		setTimeout(() => {
			overlay.classList.remove('active')
		}, 800)
		html.classList.remove('of__hidden')
	})
	overlay.addEventListener('click', () => {
		offsetX = 0
		tabsWrapper.style.transform = `translateX(${offsetX}%)`

		burgerMenu.classList.remove('active')
		tabs.forEach(tab => {
			tab.classList.remove('active')
		})
		setTimeout(() => {
			marquee.classList.remove('active')
		}, 1000)
		html.classList.remove('overflow_hidden')
		setTimeout(() => {
			overlay.classList.remove('active')
		}, 800)
		html.classList.remove('of__hidden')
	})
})
