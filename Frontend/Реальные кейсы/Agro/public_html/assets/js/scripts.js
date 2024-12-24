$(document).ready(function (e) {
	$('.wrapper #phone').mask('+7 999 9999999')
	$('textarea').on('input changeProperty', function (e) {
		if ($(this).val().length > 0) {
			$(this).addClass('filled')
		} else {
			$(this).removeClass('filled')
		}
	})
	window.onscroll = function () {
		myFunction()
	}

	var header = document.querySelector('header')
	var sticky = header.offsetTop

	function myFunction() {
		if (window.pageYOffset > 350) {
			header.classList.remove('non__fixed')
			header.classList.add('fixed')
		} else {
			header.classList.add('non__fixed')
			header.classList.remove('fixed')
		}
	}

	// MAIN PAGE SWIPERS
	// ADVANTAGES
	var advantage_Swiper = new Swiper('.advantage_swiper', {
		slidesPerView: 5,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		on: {
			slideChange: function () {
				activeAdvantage(advantage_Swiper.activeIndex)
			}
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			1240: {
				slidesPerView: 5,
				spaceBetween: 20,
				slideToClickedSlide: true
			}
		}
	})
	var btns_list = [].slice.call(
		document.querySelectorAll('[data-button-steps]')
	)
	btns_list.forEach(function (advantage_btn) {
		advantage_btn.addEventListener('click', function () {
			var advantage_id = this.dataset.buttonSteps
			advantage_Swiper.slideTo(advantage_id)
		})
	})
	var advantage_ship = document.querySelector('.advantages .ship_advantage')
	function activeAdvantage(advantage_id) {
		var advantage_num = parseInt(advantage_id, 10) + 1
		switch (advantage_num) {
			case 2:
				advantage_ship.style.left = '22%'
				break
			case 3:
				advantage_ship.style.left = '45%'
				break
			case 4:
				advantage_ship.style.left = '68%'
				break
			case 5:
				advantage_ship.style.left = 'calc(100% - 32px)'
				break
			default:
				advantage_ship.style.left = '0'
				break
		}
		btns_list.slice(0, advantage_num).forEach(function (el) {
			el.classList.add('active')
		})

		btns_list.slice(advantage_num, btns_list.length).forEach(function (el) {
			el.classList.remove('active')
		})
	}
	// END ADVANTAGE

	// CASES
	var mySwiper = new Swiper('.cases .cases_swiper ', {
		speed: 600,
		slidersPerView: 1,
		centeredSlides: true,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		on: {
			slideChange: function () {
				activeStep(mySwiper.activeIndex)
			}
		}
	})
	var btnsList = [].slice.call(document.querySelectorAll('[data-button-step]'))
	btnsList.forEach(function (btn) {
		btn.addEventListener('click', function () {
			var id = this.dataset.buttonStep
			mySwiper.slideTo(id)
		})
	})
	var image = document.querySelector('.cases .cases_list .images')
	function activeStep(id) {
		var num = parseInt(id, 10) + 1
		switch (num) {
			case 2:
				image.style.left = '22%'
				break
			case 3:
				if ($(window).width() < 768) {
					image.style.left = '45%'
				} else {
					image.style.left = '47%'
				}
				break
			case 4:
				if ($(window).width() < 768) {
					image.style.left = '69%'
				} else {
					image.style.left = '70%'
				}
				break
			case 5:
				if ($(window).width() < 768) {
					image.style.left = 'calc(100% - 32px)'
				} else {
					image.style.left = 'calc(100% - 44px)'
				}
				break
			default:
				image.style.left = '0'
				break
		}
		btnsList.slice(0, num).forEach(function (el) {
			el.classList.add('active')
		})

		btnsList.slice(num, btnsList.length).forEach(function (el) {
			el.classList.remove('active')
		})
	}

	// END CASES
	// DELIVERY
	var delivery_swiper = new Swiper('.delivery .delivery_swiper ', {
		slidesPerView: 4,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			1025: {
				slidesPerView: 3,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			1240: {
				slidesPerView: 4,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			1350: {
				slidesPerView: 4,
				spaceBetween: 20,
				slideToClickedSlide: true
			}
		},
		on: {
			slideChange: function () {
				activeDelivery(delivery_swiper.activeIndex)
			}
		}
	})
	var delivery_list = [].slice.call(
		document.querySelectorAll('[data-button-delivery]')
	)
	delivery_list.forEach(function (delivery_btn) {
		delivery_btn.addEventListener('click', function () {
			var delivery_id = this.dataset.buttonDelivery
			delivery_swiper.slideTo(delivery_id)
		})
	})
	var car = document.querySelector('.delivery .car')
	function activeDelivery(delivery_id) {
		var delivery_num = parseInt(delivery_id, 10) + 1
		switch (delivery_num) {
			case 2:
				car.style.left = '29%'
				break
			case 3:
				car.style.left = '60%'
				break
			case 4:
				car.style.left = 'calc(100% - 32px)'
				break
			default:
				car.style.left = '0'
				break
		}
		delivery_list.slice(0, delivery_num).forEach(function (el) {
			el.classList.add('active')
		})

		delivery_list.slice(delivery_num, btns_list.length).forEach(function (el) {
			el.classList.remove('active')
		})
	}

	// TESTIMONIALS
	var testimonials_swiper = new Swiper('.testimonials .testimonials_swiper ', {
		slidesPerView: 2,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			1025: {
				slidesPerView: 3,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			1240: {
				slidesPerView: 3,
				spaceBetween: 20,
				slideToClickedSlide: true
			},
			1350: {
				slidesPerView: 4,
				spaceBetween: 20,
				slideToClickedSlide: true
			}
		},
		on: {
			slideChange: function () {
				activeTestimonials(testimonials_swiper.activeIndex)
			}
		}
	})

	var list_4 = [].slice.call(
		document.querySelectorAll('[data-button-testimonials]')
	)
	list_4.forEach(function (btn_4) {
		btn_4.addEventListener('click', function () {
			var id_4 = this.dataset.buttonDelivery
			delivery_swiper.slideTo(id_4)
		})
	})
	var img = document.querySelector('.testimonials_list .image')
	function activeTestimonials(id_4) {
		var num_4 = parseInt(id_4, 10) + 1
		switch (num_4) {
			case 2:
				img.style.left = '22%'
				break
			case 3:
				img.style.left = '45%'

				break
			case 4:
				img.style.left = '69%'
				break
			case 5:
				img.style.left = 'calc(100% - 32px)'
				break
			default:
				img.style.left = '0'
				break
		}
		list_4.slice(0, num_4).forEach(function (el) {
			el.classList.add('active')
		})

		list_4.slice(num_4, list_4.length).forEach(function (el) {
			el.classList.remove('active')
		})
	}
	// END TESTIMONIALS
	// MODAL
	$('.cases .case_action .order_btn').on('click', function (e) {
		$('.modal').addClass('active')
	})
	$('.modal .close_btn').on('click', function (e) {
		$('.modal').removeClass('active')
	})
	$('.delivery .delivery_action .order_btn').on('click', function (e) {
		$('.modal').addClass('active')
	})

	// PAGE CONTACTS
	$('.contacts .actions .more_button').on('click', function (e) {
		$('.modal').addClass('active')
	})
	// FAQ ACCORDION
	$('.faq .accordion_item').on('click', function (e) {
		e.preventDefault()
		$(this).find('.accordion_content_wrapper').slideToggle(300)
		$(this).toggleClass('active')
		$('.faq .accordion_item').not($(this)).removeClass('active')
		$('.faq .accordion_item')
			.not($(this))
			.find('.accordion_content_wrapper')
			.slideUp(300)
	})
	$('header .hamburger').click(function () {
		$(this).toggleClass('active')
		$('header .hamburger_menu').toggleClass('active')
		$('body').toggleClass('overflow_hidden')
	})

	if ($(window).width() < 768) {
		$('input[type=tel]').attr('placeholder', 'Ваш номер телефона')
	} else {
		$('input[type=tel]').attr('placeholder', 'Введите ваш номер телефона')
	}
	$(window).resize(function () {
		if ($(window).width() < 768) {
			$('input[type=tel]').attr('placeholder', 'Ваш номер телефона')
		} else {
			$('input[type=tel]').attr('placeholder', 'Введите ваш номер телефона')
		}
	})

	$('.wrapper #order_form').on('submit', function (e) {
		e.preventDefault()
		let form = $(this)
		let formData = $(this).serialize()

		let formButton = $(this).find('button')
		let formButtonText = formButton.text()

		formButton.text('Отправляется...')
		formButton.attr('disabled', true).addClass('disabled')
		$.ajax({
			url: '/send.php',
			method: 'post',
			data: formData,
			success: function (data) {
				formButton.text(formButtonText)
				formButton.removeAttr('disabled').removeClass('disabled')
				form[0].reset()
				$('.modal').removeClass('active')
				iziToast.show({
					title: 'Ваша заявка принято!',
					message:
						'Спасибо за обращение! В ближайшее время наш менеджер свяжется с Вами.',
					position: 'bottomCenter'
				})
			}
		})
	})
})
