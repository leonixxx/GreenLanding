export function Navigation() {
	function smoothScroll(target, duration) {
		var target = document.querySelector(target);
		var targetPosition = target.getBoundingClientRect().top;
		var startPosition = window.pageYOffset;
		var distance = targetPosition - startPosition;
		var startTime = null;

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			var timeElapsed = currentTime - startTime;
			var run = ease(timeElapsed, startPosition, distance, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		}

		function ease(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return (c / 2) * t * t + b;
			t--;
			return (-c / 2) * (t * (t - 2) - 1) + b;
		}

		requestAnimationFrame(animation);
	}

	let section1 = document.querySelector("#frst_nav");
	let section2 = document.querySelector("#sec_nav");
	let section3 = document.querySelector("#third_nav");
	let section4 = document.querySelector("#for_nav");
	let section5 = document.querySelector("#five_nav");
	let section6 = document.querySelector("#six_nav");

	section1.addEventListener("click", function () {
		smoothScroll("#section1", 1000);
	});

	section2.addEventListener("click", function () {
		smoothScroll("#section2", 1000);
	});
    section3.addEventListener("click", function () {
		smoothScroll("#section3", 1000);
	});
    section4.addEventListener("click", function () {
		smoothScroll("#section4", 1000);
	});
    section5.addEventListener("click", function () {
		smoothScroll("#section5", 1000);
	});
    section6.addEventListener("click", function () {
		smoothScroll("#section6", 1000);
	});


}
