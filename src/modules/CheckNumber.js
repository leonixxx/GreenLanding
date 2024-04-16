export function BigSlider() {
	$(".phone12").mask("+7(999)999-9999");
	$(".phone13").mask("+7(999)999-9999");

	let allCardss = document.querySelectorAll(".portfolio__cards"),
		leftBTN = document.querySelector(".portfolio__btn1"),
		Slider2rightBTN = document.querySelector(".slider2_btn2"),
		Slider2leftBTN = document.querySelector(".slider2_btn1"),
		rightBTN = document.querySelector(".portfolio__btnActive");

	let counter = 0;
	let counter1 = 0;

	rightBTN.addEventListener("click", (e) => {
		change("right");
		changeslide();
	});
	leftBTN.addEventListener("click", (e) => {
		change("left");
		changeslide();
	});

	function change(btn) {
		if (btn === "right") {
			if (counter === 3) {
				counter = 0;
			} else {
				counter++;
			}
		}
		if (btn === "left") {
			if (counter === 0) {
				counter = 3;
			} else {
				counter--;
			}
		}
	}
	function cteatePtext() {
		let p = document.createElement("p");
		p.setAttribute("class", "porfolio__text1");
		p.textContent = `Монтаж приточной вентиляции (объект в Прайм Парк)`;
		return p;
	}
	function changeslide() {
		for (let i = 0; i < 4; i++) {
			if (counter === i) {
				allCardss.forEach((item) => {
					item.classList.remove("active_slider");
					if (item.querySelector(".porfolio__text1")) {
						item.querySelector(".porfolio__text1").remove();
					}
				});
				allCardss[counter].classList.add("active_slider");
				allCardss[counter].appendChild(cteatePtext());
			}
		}
	}

	// Второй слайдер
    let BtnActiveLeft = document.querySelector('.clients__btnActive'),
		btnActiveRight = document.querySelector('.clients__btn1'),
		slidesWrapper = document.querySelector('.clients__slider-wrapper'),
		slidesInner = document.querySelector('.clients__slider');
	let offset = 0;

	Slider2rightBTN.addEventListener('click', (e) => {
		change1("right");
		changeImage()
		changeSlide("right")

	})
	Slider2leftBTN.addEventListener('click', (e) => {
		change1("left");
		changeImage();
		changeSlide("left")
	})
	
	function changeSlide(line) {
		if(line === 'left') {
			if(offset !== 604) {
				offset = offset + 302
				slidesInner.style.transform = `translateX(-${offset}px)`
			}
		}
		if(line === 'right') {
			if(offset !== 0) {
				offset = offset - 302
				slidesInner.style.transform = `translateX(-${offset}px)`
			}
		}
	}

	function change1(btn) {
		if (btn === "left") {
			if (counter1 !== 2) {
				counter1++;
			} else {
				counter1 = 2;
			}
		}
		if (btn === "right") {
			if (counter1 !== 0) {
				counter1--;
			} else {
				counter1 = 0;
			}
		}
	}
	function changeImage() {
		if(counter1 === 0) {
			btnActiveRight.setAttribute('src', 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg');
			BtnActiveLeft.setAttribute('src', 'http://127.0.0.1:5500/dist/img/Portfolio/btn1.svg');
			BtnActiveLeft.classList.add('rotateBTN');
			btnActiveRight.classList.add('rotateBTN');
		}
		else if (counter1 === 2) {
			btnActiveRight.setAttribute('src', 'http://127.0.0.1:5500/dist/img/Portfolio/btn1.svg');
			BtnActiveLeft.setAttribute('src', 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg');
			BtnActiveLeft.classList.remove('rotateBTN');
			btnActiveRight.classList.remove('rotateBTN');
		}
		else {
			btnActiveRight.setAttribute('src', 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg');
			BtnActiveLeft.setAttribute('src', 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg');
			BtnActiveLeft.classList.remove('rotateBTN');
			btnActiveRight.classList.add('rotateBTN');
		}
	}
}
