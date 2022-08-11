const tasks = document.getElementById("tasks");
const calendar = document.querySelectorAll(".open-calendar");
const filterDropdown = document.querySelectorAll(".dropdown-filter");
const help = document.querySelector(".help__button");
const profile = document.querySelector(".avatar");
const subBar = document.getElementById("open-subbar");
const refresh = document.querySelectorAll(".box__button-refresh");
const maximize = document.querySelectorAll(".box__button-maximize");
const menuHeader = document.querySelector(".menu__dropdown");
const barAdd = document.querySelector(".bar .bar__button-solid");
const boxAdd = document.querySelectorAll(".box .box__button");
const barEdit = document.querySelector(".bar .bar__button-more");
const boxDelete = document.querySelector(".delete-box");

const tasksPopup = document.querySelector(".aside-tasks");
const calendarPopup = document.querySelector(".calendar");
const dropdownFilterPopup = document.querySelector(".mini-dropdown");
const helpPopup = document.querySelector(".aside-help");
const profilePopup = document.querySelector(".aside-user");
const subBarPopup = document.querySelector(".subbar");
const refreshPopup = document.getElementById("refresh");
const maximizePopup = document.getElementById("maximize");
const menuHeaderPopup = document.querySelector(".header-menu-dropdown");
const barAddPopup = document.querySelector(".bar-dropdown");
const boxAddPopup = document.querySelector(".box-dropdown");
const barEditPopup = document.querySelector(".bar-edit-dropdown");
const boxDeletePopup = document.querySelector(".warning-popup");

const closeTasksPopup = document.querySelector(".aside-tasks .popup-header__close");
const closeCalendarPopup = document.querySelector(".calendar__close");
const closeHelpPopup = document.querySelector(".aside-help .popup-header__close");
const closeBoxDeletePopup = document.querySelector(".warning__button-return");

tasks.addEventListener("click", openTasks);
calendar.forEach((el) => {
	el.addEventListener("click", openCalendar);
});
filterDropdown.forEach((el) => {
	el.addEventListener("click", openDropdownFilter);
});
refresh.forEach((el) => {
	el.addEventListener("mouseenter", openRefresh);
	el.addEventListener("mouseleave", closeRefresh);
});
maximize.forEach((el) => {
	el.addEventListener("mouseenter", openMaximize);
	el.addEventListener("mouseleave", closeMaximize);
});
help.addEventListener("click", openHelp);
profile.addEventListener("click", openProfile);
subBar.addEventListener("click", openSubBar);
menuHeader.addEventListener("click", openMenuHeader);
barAdd.addEventListener("click", openBarDropdown);
boxAdd.forEach((el) => {
	el.addEventListener("click", openBoxDropdown);
});
barEdit.addEventListener("click", openBarEditDropdown);
boxDelete.addEventListener("click", openBoxDelete);

closeTasksPopup.addEventListener("click", closeTasks);
closeCalendarPopup.addEventListener("click", closeCalendar);
closeHelpPopup.addEventListener("click", closeHelp);
closeBoxDeletePopup.addEventListener("click", closeBoxDelete);

function openTasks() {
	if (!tasksPopup.style.display) {
		tasksPopup.style.display = "block";
	} else {
		tasksPopup.style.display = "";
	}
}

function closeTasks() {
	tasksPopup.style.display = "none";
}

function openCalendar(e) {
	if (!calendarPopup.style.display) {
		calendarPopup.style.display = "block";
		calendarPopup.style.top = `${e.pageY + 10}px`;
		calendarPopup.style.left = `${e.pageX - 75}px`;
	} else {
		calendarPopup.style.display = "";
	}
}

function closeCalendar() {
	calendarPopup.style.display = "";
}

function openDropdownFilter(e) {
	if (!dropdownFilterPopup.style.display) {
		dropdownFilterPopup.style.display = "flex";
		dropdownFilterPopup.style.top = `${e.pageY + 10}px`;
		dropdownFilterPopup.style.left = `${e.pageX - 75}px`;
	} else {
		dropdownFilterPopup.style.display = "";
	}
}

function openHelp() {
	if (!helpPopup.style.display) {
		helpPopup.style.display = "block";
	} else {
		helpPopup.style.display = "";
	}
}

function closeHelp() {
	helpPopup.style.display = "";
}

function openProfile() {
	if (!profilePopup.style.display) {
		profilePopup.style.display = "block";
	} else {
		profilePopup.style.display = "";
	}
}

function openSubBar() {
	if (!subBarPopup.style.display) {
		subBarPopup.style.display = "flex";
	} else {
		subBarPopup.style.display = "";
	}
}

function openRefresh() {
	let el = this.getBoundingClientRect();
	refreshPopup.style.display = "flex";
	refreshPopup.style.top = `${el.y - 40}px`;
	refreshPopup.style.left = `${el.x - 45}px`;
}

function closeRefresh() {
	refreshPopup.style.display = "";
}

function openMaximize(e) {
	let el = this.getBoundingClientRect();
	maximizePopup.style.display = "flex";
	maximizePopup.style.top = `${el.y - 40}px`;
	maximizePopup.style.left = `${el.x - 22}px`;
}

function closeMaximize() {
	maximizePopup.style.display = "";
}

function openMenuHeader(e) {
	if (!menuHeaderPopup.style.display) {
		menuHeaderPopup.style.display = "block";
		menuHeaderPopup.style.top = `${e.pageY + 10}px`;
		menuHeaderPopup.style.left = `${e.pageX - 75}px`;
	} else {
		menuHeaderPopup.style.display = "";
	}
}

function openBarDropdown(e) {
	if (!barAddPopup.style.display) {
		barAddPopup.style.display = "block";
		barAddPopup.style.top = `${e.pageY + 10}px`;
		barAddPopup.style.left = `${e.pageX - 120}px`;
	} else {
		barAddPopup.style.display = "";
	}
}

function openBoxDropdown(e) {
	if (!boxAddPopup.style.display) {
		boxAddPopup.style.display = "block";
		boxAddPopup.style.top = `${e.pageY + 10}px`;
		boxAddPopup.style.left = `${e.pageX - 120}px`;
	} else {
		boxAddPopup.style.display = "";
	}
}

function openBarEditDropdown(e) {
	if (!barEditPopup.style.display) {
		barEditPopup.style.display = "block";
		barEditPopup.style.top = `${e.pageY + 10}px`;
		barEditPopup.style.left = `${e.pageX - 120}px`;
	} else {
		barEditPopup.style.display = "";
	}
}

function openBoxDelete() {
	if (!boxDeletePopup.style.display) {
		boxDeletePopup.style.display = "flex";
	} else {
		boxDeletePopup.style.display = "";
	}
}

function closeBoxDelete() {
	boxDeletePopup.style.display = "";
}
