const overviewTab = document.getElementById("overview-tab");
const createTab = document.getElementById("create-tab");
const pointsTab = document.getElementById("points-tab");
const overviewSection = document.getElementById("overview-card");
const createSection = document.getElementById("create-card");
const pointsSection = document.getElementById("points-card");

// Initially show the overview section and highlight its tab
overviewTab.classList.add("active");
overviewSection.style.display = "flex";
createSection.style.display = "none";
createSection.style.opacity = "0";
createSection.style.transition = "opacity 0.3s";

pointsSection.style.display = "none";
pointsSection.style.opacity = "0";
pointsSection.style.transition = "opacity 0.3s";


// Add click event listeners to tabs
overviewTab.addEventListener("click", function () {
    overviewTab.classList.add("active");
    createTab.classList.remove("active");
    pointsTab.classList.remove("active");
    overviewSection.style.display = "flex";
    createSection.style.display = "none";
    pointsSection.style.display = "none";
});

createTab.addEventListener("click", function () {
    createTab.classList.add("active");
    overviewTab.classList.remove("active");
    pointsTab.classList.remove("active");
    createSection.style.display = "flex";
    overviewSection.style.display = "none";
    pointsSection.style.display = "none";
});

pointsTab.addEventListener("click", function () {
    pointsTab.classList.add("active");
    overviewTab.classList.remove("active");
    createTab.classList.remove("active");
    pointsSection.style.display = "flex";
    overviewSection.style.display = "none";
    createSection.style.display = "none";
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
overviewTab.addEventListener("click", function () {
    overviewTab.classList.add("active");
    createTab.classList.remove("active");
    pointsTab.classList.remove("active");
    switchTabWithTransition(overviewSection, createSection, pointsSection);
});

createTab.addEventListener("click", function () {
    createTab.classList.add("active");
    overviewTab.classList.remove("active");
    pointsTab.classList.remove("active");
    switchTabWithTransition(createSection, overviewSection, pointsSection);
});
pointsTab.addEventListener("click", function () {
    pointsTab.classList.add("active");
    overviewTab.classList.remove("active");
    createTab.classList.remove("active");
    switchTabWithTransition(pointsSection, overviewSection, createSection);
});
