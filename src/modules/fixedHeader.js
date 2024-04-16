export function fixedHeader() {
	let headerContainer = document.querySelector(".sticky_header-wrapper");
	const mediaQuery = window.matchMedia("(max-width: 600px)");

	window.addEventListener("scroll", function () {
        if (mediaQuery.matches) {
			headerContainer.classList.remove("fixed__header");
            return
		}
		if (window.pageYOffset > 830) {
			headerContainer.classList.add("fixed__header");
		} else {
			headerContainer.classList.remove("fixed__header");
		}
	});
}
