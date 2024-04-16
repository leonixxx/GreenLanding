export function portfMobSloder() {
	const btnRight = document.querySelector(".mobSlider--btnSec"),
		btnLeft = document.querySelector(".mobSlider--btnFirst"),
		slidesInner = document.querySelector(".mobSlider-inner");

	let offset = 0;
	btnRight.addEventListener("mouseover", (e) => {
		if (
			e.target.classList.contains("active_mobBTN") &&
			btnRight.src ===
				"http://127.0.0.1:5500/dist/img/Mobail/BTN__1Right.png"
		) {
			e.target.src = "http://127.0.0.1:5500/dist/img/client/2_A.svg";
		}
	});
	btnRight.addEventListener("mouseout", (e) => {
		if (
			e.target.classList.contains("active_mobBTN") &&
			btnRight.src === "http://127.0.0.1:5500/dist/img/client/2_A.svg"
		) {
			e.target.src =
				"http://127.0.0.1:5500/dist/img/Mobail/BTN__1Right.png";
		}
	});
	btnLeft.addEventListener("mouseover", (e) => {
		if (
			e.target.classList.contains("active_mobBTN") &&
			btnLeft.src ===
				"http://127.0.0.1:5500/dist/img/Mobail/BTN__1Right.png"
		) {
			e.target.src = "http://127.0.0.1:5500/dist/img/client/2_A.svg";
		}
	});
	btnLeft.addEventListener("mouseout", (e) => {
		if (
			e.target.classList.contains("active_mobBTN") &&
			btnLeft.src === "http://127.0.0.1:5500/dist/img/client/2_A.svg"
		) {
			e.target.src =
				"http://127.0.0.1:5500/dist/img/Mobail/BTN__1Right.png";
		}
	});
	btnRight.addEventListener("click", (e) => {
		if (offset < 1650) {
			offset = offset + 550;
			slidesInner.style.transform = `translateX(-${offset}px)`;
			if (offset === 1650) {
				btnRight.classList.remove("active_mobBTN");
				btnLeft.classList.add("active_mobBTN");
				btnRight.src =
					"http://127.0.0.1:5500/dist/img/Mobail/BTN_2Left.png";
				btnRight.classList.add("rotateBTN");
				btnLeft.src =
					"http://127.0.0.1:5500/dist/img/Mobail/BTN__1Right.png";
				btnLeft.classList.add("rotateBTN");
			}
		}
	});
	btnLeft.addEventListener("click", (e) => {
        if (offset > 0) {
			offset = offset - 550;
			slidesInner.style.transform = `translateX(-${offset}px)`;
			if (offset === 0) {
				btnRight.classList.add("active_mobBTN");
				btnLeft.classList.remove("active_mobBTN");
				btnRight.src =
					"http://127.0.0.1:5500/dist/img/Mobail/BTN__1Right.png";
				btnRight.classList.remove("rotateBTN");
				btnLeft.src =
					"http://127.0.0.1:5500/dist/img/Mobail/BTN_2Left.png";
				btnLeft.classList.remove("rotateBTN");
			}
		}
    });
}
