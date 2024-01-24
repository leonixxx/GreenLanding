export function servicesChange() {
    const changeBtn = document.querySelector('.services__leftLittle'),
        firstlittleConteiner = document.querySelector('.services__left--change1'),
        secondlittleConteiner = document.querySelector('.services__left--change2'),
        icons = document.querySelectorAll('.services__leftLittle--icons'),
        resetConteiner = document.querySelector('.services__left--wrapper'),
        active2 = document.querySelectorAll('.active2'), 
        active1 = document.querySelectorAll('.active1')

    changeBtn.addEventListener('click', (e) => {
        if (!e.target.classList.contains('services__left--Active') || !e.target.parentNode.classList.contains('services__left--Active') || !e.target.parentNode.parentNode.classList.contains('services__left--Active')) {
            if (+e.target.getAttribute('id') === 1 || +e.target.parentNode.getAttribute('id') === 1 || +e.target.parentNode.parentNode.getAttribute('id') === 1) {
                renderPage(1)
            }
            else if (+e.target.getAttribute('id') === 2 || +e.target.parentNode.getAttribute('id') === 2 || +e.target.parentNode.parentNode.getAttribute('id') === 2) {
                renderPage(2)
            }
    }})
    ActiveRemove(active1, '1')
    secondlittleConteiner.addEventListener('mouseover', (e) => {
        if(!e.target.classList.contains('services__left--Active') && e.target.classList.contains('active2')) {
            secondlittleConteiner.classList.add('green-change1')
            icons[1].src = 'http://127.0.0.1:5500/dist/img/servic/Green-Logo_conder.svg'
        }
    });
    secondlittleConteiner.addEventListener('mouseout', (e) => {
        if(!e.target.classList.contains('services__left--Active')  && e.target.classList.contains('active2')) {
            secondlittleConteiner.classList.remove('green-change1')
            icons[1].src = 'http://127.0.0.1:5500/dist/img/servic/changeIcons2.svg'
        }
    })
    firstlittleConteiner.addEventListener('mouseover', (e) => {
        if(!e.target.classList.contains('services__left--Active') && e.target.classList.contains('active1')) {
            firstlittleConteiner.classList.add('green-change1')
            icons[0].src = 'http://127.0.0.1:5500/dist/img/servic/GGGreeen.svg'
        }
    });
    firstlittleConteiner.addEventListener('mouseout', (e) => {
        if(!e.target.classList.contains('services__left--Active')  && e.target.classList.contains('active1')) {
            firstlittleConteiner.classList.remove('green-change1')
            icons[0].src = 'http://127.0.0.1:5500/dist/img/servic/changeIcons1_1.svg'
        }
    })


    function renderPage(a) {
        if (a === 1) {
            resetConteiner.innerHTML = a1
            firstlittleConteiner.classList.add('services__left--Active')
            secondlittleConteiner.classList.remove('services__left--Active')
            icons[0].src = 'http://127.0.0.1:5500/dist/img/servic/changeIcons1.svg'
            icons[1].src = 'http://127.0.0.1:5500/dist/img/servic/changeIcons2.svg'
            firstlittleConteiner.classList.remove('green-change1')
            ActiveRemove(active1, '1')
            ActiveActive(active2, '2')
        }
        else if (a === 2) {
            resetConteiner.innerHTML = a2
            secondlittleConteiner.classList.add('services__left--Active')
            firstlittleConteiner.classList.remove('services__left--Active')
            icons[0].src = 'http://127.0.0.1:5500/dist/img/servic/changeIcons1_1.svg'
            icons[1].src = 'http://127.0.0.1:5500/dist/img/servic/changeIcons1_2.svg'
            secondlittleConteiner.classList.remove('green-change1')
            ActiveActive(active1, '1')
            ActiveRemove(active2, '2')
        }
    }
    function ActiveRemove(array, num) {
        array.forEach(item => {
            item.classList.remove('active' + num)
        })
    }
    function ActiveActive(array, num) {
        array.forEach(item => {
            item.classList.add('active' + num)
        })
    }

    let a2 = `<div class="services__leftIcons--wrapper">
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
                    src="img/servic/left1_2.jpg"
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
                    src="img/servic/left1_3.jpg"
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
                    src="img/servic/left1_4.jpg"
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
                    src="img/servic/left1_5.jpg"
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
                    src="img/servic/left1_6.jpg"
                    width="34"
                    height="34"
                    alt="Icons6"
                    class="services__left-iconsIMG"
                />
                <div class="left1--text">
                    Монтаж настенных, канальных и кассетных кондиционеров
                </div>
            </div>
        </li>
    </ul>
</div>
<img
    src="img/servic/services__left-img2.png"
    alt=""
    class="services__left--img"
/>`
let a1 = `<div class="services__leftIcons--wrapper">
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
                Проектирование систем
                вентиляции любой
                сложности
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
/>`
}
// export default servicesChange;