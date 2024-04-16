export function ActiveBTN() {

    let BtnActive = document.querySelector('.clients__btnActive'),
        PortfolioBtn = document.querySelector('.portfolio__btnActive'),
        btnctive2 = document.querySelector('.portfolio__btn1'),
        btnctiveClients = document.querySelector('.clients__btn1')

    PortfolioBtn.addEventListener('mouseover', (e) => {
        activeBTN(PortfolioBtn, 'http://127.0.0.1:5500/dist/img/client/2_A.svg')
        // BtnActive.src = 'http://127.0.0.1:5500/dist/img/client/2_A.svg'
    })
    PortfolioBtn.addEventListener('mouseout', (e) => {
        activeBTN(PortfolioBtn, 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg')
        // BtnActive.src = 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg'
    })

    function activeBTN(parent, src) {
        parent.src = src
    }

    btnctive2.addEventListener('mouseover', (e) => {
        activeBTN(btnctive2, 'http://127.0.0.1:5500/dist/img/client/2_A.svg')
        // BtnActive.src = 'http://127.0.0.1:5500/dist/img/client/2_A.svg'
    })
    btnctive2.addEventListener('mouseout', (e) => {
        activeBTN(btnctive2, 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg')
        // BtnActive.src = 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg'
    })


    BtnActive.addEventListener('mouseover', (e) => {
        if(BtnActive.getAttribute('src') === 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg') {
            activeBTN(BtnActive, 'http://127.0.0.1:5500/dist/img/client/2_A.svg')
        }
    })
    BtnActive.addEventListener('mouseout', (e) => {
        if(BtnActive.getAttribute('src') === 'img/Portfolio/btn2.svg' || BtnActive.getAttribute('src') === 'http://127.0.0.1:5500/dist/img/client/2_A.svg') {
            activeBTN(BtnActive, 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg')
        }
    })

    btnctiveClients.addEventListener('mouseover', (e) => {
        if (btnctiveClients.getAttribute('src') === 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg'){
            activeBTN(btnctiveClients, 'http://127.0.0.1:5500/dist/img/client/2_A.svg')
        }
    })
    btnctiveClients.addEventListener('mouseout', (e) => {
        if(btnctiveClients.getAttribute('src') === 'img/Portfolio/btn2.svg' || btnctiveClients.getAttribute('src') === 'http://127.0.0.1:5500/dist/img/client/2_A.svg') {
            activeBTN(btnctiveClients, 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg')
        }
    })
}
