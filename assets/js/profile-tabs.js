const scoreTab = document.getElementById("score-tab");
const killsTab = document.getElementById("kills-tab");
const weeklyTab = document.getElementById("weekly-tab");
const monthlyTab = document.getElementById("monthly-tab");
const scoreSection = document.getElementById("score-card");
const killsSection = document.getElementById("kills-card");
const weeklySection = document.getElementById("weekly-card");
const monthlySection = document.getElementById("monthly-card");

// Initially show the score section and highlight its tab
scoreTab.classList.add("active");
scoreSection.style.display = "flex";
killsSection.style.display = "none";
killsSection.style.opacity = "0";
killsSection.style.transition = "opacity 0.3s";

weeklySection.style.display = "none";
weeklySection.style.opacity = "0";
weeklySection.style.transition = "opacity 0.3s";

monthlySection.style.display = "none";
monthlySection.style.opacity = "0";
monthlySection.style.transition = "opacity 0.3s";


// Add click event listeners to tabs
scoreTab.addEventListener("click", function () {
    scoreTab.classList.add("active");
    killsTab.classList.remove("active");
    weeklyTab.classList.remove("active");
    monthlyTab.classList.remove("active");
    scoreSection.style.display = "flex";
    killsSection.style.display = "none";
    weeklySection.style.display = "none";
    monthlySection.style.display = "none";
});

killsTab.addEventListener("click", function () {
    killsTab.classList.add("active");
    scoreTab.classList.remove("active");
    weeklyTab.classList.remove("active");
    monthlyTab.classList.remove("active");
    killsSection.style.display = "flex";
    scoreSection.style.display = "none";
    weeklySection.style.display = "none";
    monthlySection.style.display = "none";
});

weeklyTab.addEventListener("click", function () {
    weeklyTab.classList.add("active");
    scoreTab.classList.remove("active");
    killsTab.classList.remove("active");
    monthlyTab.classList.remove("active");
    weeklySection.style.display = "flex";
    scoreSection.style.display = "none";
    killsSection.style.display = "none";
    monthlySection.style.display = "none";
});
monthlyTab.addEventListener("click", function () {
    monthlyTab.classList.add("active");
    scoreTab.classList.remove("active");
    killsTab.classList.remove("active");
    weeklyTab.classList.remove("active");
    monthlySection.style.display = "flex";
    scoreSection.style.display = "none";
    killsSection.style.display = "none";
    weeklySection.style.display = "none";
});


// Add transition and opacity when switching tabs
function switchTabWithTransition(tabToShow, tabToHide) {
tabToHide.style.opacity = "0";
tabToHide.style.transition = "opacity 0.3s";
tabToShow.style.opacity = "0";
tabToShow.style.display = "flex";
setTimeout(function () {
    tabToHide.style.display = "none";
    tabToShow.style.opacity = "1";
}, 50);
}
scoreTab.addEventListener("click", function () {
    scoreTab.classList.add("active");
    killsTab.classList.remove("active");
    weeklyTab.classList.remove("active");
    monthlyTab.classList.remove("active");
    switchTabWithTransition(scoreSection, killsSection, monthlySection, weeklySection);
});

killsTab.addEventListener("click", function () {
    killsTab.classList.add("active");
    scoreTab.classList.remove("active");
    weeklyTab.classList.remove("active");
    monthlyTab.classList.remove("active");
    switchTabWithTransition(killsSection, scoreSection,monthlySection, weeklySection);
});
weeklyTab.addEventListener("click", function () {
    weeklyTab.classList.add("active");
    scoreTab.classList.remove("active");
    killsTab.classList.remove("active");
    monthlyTab.classList.remove("active");
    switchTabWithTransition(weeklySection, scoreSection,monthlySection, killsSection);
});
monthlyTab.addEventListener("click", function () {
    monthlyTab.classList.add("active");
    scoreTab.classList.remove("active");
    weeklyTab.classList.remove("active");
    killsTab.classList.remove("active");
    switchTabWithTransition(monthlySection, scoreSection,killsSection, weeklySection);
});