export function ActiveBTN() {

    let BtnActive = document.querySelector('.clients__btnActive'),
        PortfolioBtn = document.querySelector('.portfolio__btnActive')

    BtnActive.addEventListener('mouseover', (e) => {
        activeBTN(BtnActive, 'http://127.0.0.1:5500/dist/img/client/2_A.svg')
        // BtnActive.src = 'http://127.0.0.1:5500/dist/img/client/2_A.svg'
    })
    BtnActive.addEventListener('mouseout', (e) => {
        activeBTN(BtnActive, 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg')
        // BtnActive.src = 'http://127.0.0.1:5500/dist/img/Portfolio/btn2.svg'
    })
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
}
