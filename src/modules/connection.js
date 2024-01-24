export function Connection() {
    let btnConection = document.querySelector('#Connection__btn1'),
        btnCloseConnection = document.querySelector('.Modal-main-btn__text'),
        modalWindow = document.querySelector('#Modal-connection'),
        body = document.body;

    btnConection.addEventListener('click', showModal)
    btnCloseConnection.addEventListener('click', closeModal)

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

}