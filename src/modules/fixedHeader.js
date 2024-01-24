export function fixedHeader() {
    let headerContainer = document.querySelector('.sticky_header-wrapper');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 830) {
            headerContainer.classList.add('fixed__header')
        }
        else {
            headerContainer.classList.remove('fixed__header')
        }
    });
}