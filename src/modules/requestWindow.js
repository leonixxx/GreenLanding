export function RequestWindow() {


    let btnConection = document.querySelectorAll('.Request__active-BTN'),
        btnClose = document.querySelector('.Modal-main3btn__text'),
        body = document.body,
        modalWindow = document.querySelector('#request-Modal');

    btnConection.forEach(item => {
        item.addEventListener('click', showModal)
    })
    btnClose.addEventListener('click', closeModal)
    document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal()
            }
    })

    function showModal() {
        modalWindow.classList.remove('modal__hiden')
        body.classList.add('modal__open')
    }
    function closeModal() {
        modalWindow.classList.add('modal__hiden')
        body.classList.remove('modal__open')
    }

}