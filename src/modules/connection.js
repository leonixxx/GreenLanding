export function Connection() {
    let btnConection = document.querySelector('#Connection__btn1'),
        btnCloseConnection = document.querySelector('.Modal-main-btn__text'),
        modalWindow = document.querySelector('#Modal-connection'),
        mobailContainer = document.querySelector('.mobailMenu--wrap'),
        mobailBtn = document.querySelector('.menuLogo'),
        closeMobBtn = document.querySelector('.menuLogo-2'),
        a1 = document.querySelectorAll('.hey'),
        body = document.body;

    btnConection.addEventListener('click', showModal)
    btnCloseConnection.addEventListener('click', closeModal)
    mobailBtn.addEventListener('click', showModalMobail);
    closeMobBtn.addEventListener('click', closeMobModal);
    a1.forEach(item => {
        item.addEventListener('click', scroll)
    })

    function showModal() {
        modalWindow.classList.remove('modal__hiden')
        body.classList.add('modal__open')
    }
    function closeModal() {
        modalWindow.classList.add('modal__hiden')
        body.classList.remove('modal__open')
    }
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal()
        }
    })

    function showModalMobail() {
        mobailContainer.classList.add('mobailMenu-open')
        body.classList.add('modal__open')
    }
    function closeMobModal() {
        mobailContainer.classList.remove('mobailMenu-open')
        body.classList.remove('modal__open')
    }
    function scroll() {
        mobailContainer.classList.remove('mobailMenu-open')
        body.classList.remove('modal__open')

    }
}