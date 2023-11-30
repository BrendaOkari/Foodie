function nav(){
	
	const body = document.querySelector(".body")
	const main = document.querySelector(".main");
	const hamburger = document.querySelector(".hamburger");
	const mobilenav = document.querySelector(".mobilenav");
	const hamburger2 = document.querySelector(".hamburger2");
	const header = document.querySelector(".header");
	const footers = document.querySelector(".footers");
	const navclose = document.querySelector(".navclose");
	const loader = document.querySelector("#loader");
	const mobilesearch = document.querySelector(".mobilesearch");
	const searchboxcontainer = document.querySelector(".searchboxcontainer");
	const searchclose = document.querySelector(".searchclose");


	$(document).ready(function() {

		setTimeout(function(){
			$('body').addClass('loaded');
		}, 3000);

	});

	hamburger.addEventListener("click", () => {
		hamburger.style.display="none";
		hamburger2.style.display="block";
		mobilenav.style.display="flex";
		body.style.overflow="hidden";
		navclose.style.display="block";
	});

	hamburger2.addEventListener("click", () => {
		hamburger2.style.display="none";
		hamburger.style.display="block";
		mobilenav.style.display="none";
		body.style.overflow="scroll";
		navclose.style.display = "none";
	});
	navclose.addEventListener("click", () => {
		hamburger2.style.display="none";
		hamburger.style.display="block";
		mobilenav.style.display="none";
		body.style.overflow="scroll";
		navclose.style.display = "none";
	});

	mobilesearch.addEventListener("click", () => {
		searchboxcontainer.style.display = "flex";
		main.style.filter = "blur(4px)";
		body.style.overflow = "hidden";
	});

	searchclose.addEventListener("click", () => {
		searchboxcontainer.style.display = "none";
		main.style.filter = "none";
		body.style.overflow = "scroll";
	});






	const pccontact = document.querySelector(".pccontact");
	const mobilecontact = document.querySelector(".mobilecontact");
	const pccontactclose = document.querySelector(".pccontactclose");
	const contactcontainer = document.querySelector(".contactcontainer")

	pccontact.addEventListener("click", () => {
		contactcontainer.style.display = "flex";
		main.style.filter = "blur(6px)";
		body.style.overflow = "hidden";
	});

	pccontactclose.addEventListener("click", () => {
		contactcontainer.style.display = "none";
		body.style.overflow = "scroll";
		main.style.filter = "none";
	});
	contactcontainer.addEventListener("click", () => {
		mobilenav.style.display = "none";
		hamburger2.style.display = "none";
		hamburger.style.display = "block";
	});

	mobilecontact.addEventListener("click", () => {
		contactcontainer.style.display = "flex";
		mobilenav.style.display = "none";
		navclose.style.display = "none";
		hamburger2.style.display = "none";
		hamburger.style.display = "block";
		body.style.overflow = "hidden";
		main.style.filter = "blur(6px)";
	});

}






