	let btnNext = document.querySelector(".next"),
		btnPrev = document.querySelector(".prev"),
		slides = document.querySelectorAll(".slider__content div")

	let sliderCount = 0

	function showSlide(i = 0) {
		slides[i].classList.add("active")
	}

	function hideSlides() {
		slides.forEach(item => {
			item.classList.remove("active")
		})
	}

	btnNext.addEventListener("click", () => {
		sliderCount++
		if (sliderCount >= slides.length) {
			sliderCount = 0
		}
		hideSlides()
		showSlide(sliderCount)
	})

	btnPrev.addEventListener("click", () => {
		sliderCount--
		if (sliderCount < 0) {
			sliderCount = slides.length - 1
		}
		hideSlides()
		showSlide(sliderCount)
	})

	hideSlides()
	showSlide()