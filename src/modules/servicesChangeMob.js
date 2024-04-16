export function servicesChangeMob() {
	const mediaQuery = window.matchMedia("(max-width: 600px)");

	if (mediaQuery.matches) {
		const allBTN = document.querySelectorAll(".finder1");
		allBTN.forEach((item) => {
			item.addEventListener("mouseover", (e) => {
				if (e.target.firstElementChild && !e.target.classList.contains("ActiveMobBTN")) {
					e.target.classList.add("white-Color");
                    e.target.firstElementChild.classList.remove('green-mob')
				}
                if (e.target.classList.contains('white-mob')) {
                    e.target.classList.add('green-mob')
                }
			});
			item.addEventListener("mouseout", (e) => {
				if (!e.target.classList.contains("ActiveMobBTN")) {
					e.target.classList.remove("white-Color");
				}
                if (e.target.classList.contains('white-mob')) {
                    e.target.classList.remove('green-mob')
                }
			});
			item.addEventListener("click", (e) => {
				if (
					e.target.classList.contains("finder1") &&
					!e.target.classList.contains("ActiveMobBTN")
				) {
					e.target.classList.remove("white-Color");
					e.target.classList.add("ActiveMobBTN");
					if (e.target.nextElementSibling) {
						e.target.nextElementSibling.classList.remove(
							"ActiveMobBTN"
						);
                        e.target.firstElementChild.classList.remove('white-mob')
                        e.target.nextElementSibling.firstElementChild.classList.add('white-mob')
						e.target.parentElement.nextElementSibling.innerHTML =
							content1;
					} else {
						e.target.previousElementSibling.classList.remove(
							"ActiveMobBTN"
						);
                        e.target.firstElementChild.classList.remove('white-mob')
                        e.target.previousElementSibling.firstElementChild.classList.add('white-mob')
						e.target.parentElement.nextElementSibling.innerHTML =
							content2;
					}
				}
                if (e.target.classList.contains('services_mobail-text') && !e.target.parentNode.classList.contains('ActiveMobBTN')) {
					e.target.parentNode.classList.remove("white-Color");
					e.target.parentNode.classList.add("ActiveMobBTN");
                    e.target.classList.remove('green-mob')
                    if (e.target.parentNode.nextElementSibling) {
						e.target.parentNode.nextElementSibling.classList.remove(
							"ActiveMobBTN"
						);
                        e.target.classList.remove('white-mob')
                        e.target.parentNode.nextElementSibling.firstElementChild.classList.add('white-mob')
						e.target.parentNode.parentElement.nextElementSibling.innerHTML =
							content1;
					} else {
						e.target.parentNode.previousElementSibling.classList.remove(
							"ActiveMobBTN"
						);
                        e.target.classList.remove('white-mob')
                        e.target.parentNode.previousElementSibling.firstElementChild.classList.add('white-mob')
						e.target.parentNode.parentElement.nextElementSibling.innerHTML =
							content2;
					}
                }
			});
		});
	}

	const content1 = `<div class="services__left--wrapper">
    <div class="services__leftIcons--wrapper">
        <ul class="services__left--list">
            <li class="left1">
                <div class="left1--inner">
                    <img
                        src="img/servic/left1.jpg"
                        width="34"
                        height="34"
                        alt="Icons1"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                    Проектирование систем кондиционирования
                    </div>
                </div>
            </li>
            <li class="left2">
                <div class="left1--inner">
                    <img
                        src="img/servic/left2.jpg"
                        width="34"
                        height="34"
                        alt="Icons2"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                    Монтаж сплит-систем
                    </div>
                </div>
            </li>
            <li class="left3">
                <div class="left1--inner">
                    <img
                        src="img/servic/left3.jpg"
                        width="34"
                        height="34"
                        alt="Icons3"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                    Монтаж мульти сплит-систем
                    </div>
                </div>
            </li>
            <li class="left4">
                <div class="left1--inner">
                    <img
                        src="img/servic/left4.jpg"
                        width="34"
                        height="34"
                        alt="Icons4"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                    Монтаж VRV и VRF систем
                    </div>
                </div>
            </li>
            <li class="left5">
                <div class="left1--inner">
                    <img
                        src="img/servic/left5.jpg"
                        width="34"
                        height="34"
                        alt="Icons5"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                    Монтаж фанкойлов
                    </div>
                </div>
            </li>
            <li class="left6">
                <div class="left1--inner">
                    <img
                        src="img/servic/left6.jpg"
                        width="34"
                        height="34"
                        alt="Icons6"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                    Монтаж настенных, канальных
                    и кассетных кондиционеров
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <img
        src="img/servic/services__left-img1.png"
        alt=""
        class="services__left--img"
    />
    <img
        src="img/Mobail/3333.png"
        alt=""
        class="services__left--img_2"
    />
</div>`;
	const content2 = `<div class="services__left--wrapper">
    <div class="services__leftIcons--wrapper">
        <ul class="services__left--list">
            <li class="left1">
                <div class="left1--inner">
                    <img
                        src="img/servic/left1.jpg"
                        width="34"
                        height="34"
                        alt="Icons1"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                        Монтаж системы осушения, вентиляции воздуха в бассейне
                    </div>
                </div>
            </li>
            <li class="left2">
                <div class="left1--inner">
                    <img
                        src="img/servic/left2.jpg"
                        width="34"
                        height="34"
                        alt="Icons2"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                        Монтаж приточной
                        вентиляции
                    </div>
                </div>
            </li>
            <li class="left3">
                <div class="left1--inner">
                    <img
                        src="img/servic/left3.jpg"
                        width="34"
                        height="34"
                        alt="Icons3"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                        Монтаж вытяжной
                        вентиляции
                    </div>
                </div>
            </li>
            <li class="left4">
                <div class="left1--inner">
                    <img
                        src="img/servic/left4.jpg"
                        width="34"
                        height="34"
                        alt="Icons4"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                        Монтаж вентиляции с
                        увлажнением воздуха
                    </div>
                </div>
            </li>
            <li class="left5">
                <div class="left1--inner">
                    <img
                        src="img/servic/left5.jpg"
                        width="34"
                        height="34"
                        alt="Icons5"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                        Монтаж вентиляции с
                        рекуператором
                    </div>
                </div>
            </li>
            <li class="left6">
                <div class="left1--inner">
                    <img
                        src="img/servic/left6.jpg"
                        width="34"
                        height="34"
                        alt="Icons6"
                        class="services__left-iconsIMG"
                    />
                    <div class="left1--text">
                        Монтаж вентиляции с
                        осушением для бассейна
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <img
        src="img/servic/services__left-img1.png"
        alt=""
        class="services__left--img"
    />
    <img
        src="img/Mobail/121211.png"
        alt=""
        class="services__left--img_2"
    />
</div>`;
}
