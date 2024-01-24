export function checkNumber() {
    let numConteiner = document.querySelector('#Name__conteiner'),
        nameConteiner = document.querySelector('#num__conteiner'),
        btnSend = document.querySelector('#request__line');

    let numValue = numConteiner.value

    btnSend.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e)
        console.log(numValue)

    })
}