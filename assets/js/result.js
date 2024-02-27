
document.addEventListener("DOMContentLoaded", function () {
  const resultTab = document.getElementById("result-tab");
  const scoreTab = document.getElementById("score-tab");
  const killsTab = document.getElementById("kills-tab");
  const teamTab = document.getElementById("team-tab");
  const resultSection = document.getElementById("result-card");
  const scoreSection = document.getElementById("score-card");
  const killsSection = document.getElementById("kills-card");
  const teamSection = document.getElementById("team-card");


  // Initially show the overview section and highlight its tab
  resultTab.classList.add("active");
  resultSection.style.display = "flex";
  scoreSection.style.display = "none";
  scoreSection.style.opacity = "0";
  scoreSection.style.transition = "opacity 0.3s";
  killsSection.style.display = "none";
  killsSection.style.opacity = "0";
  killsSection.style.transition = "opacity 0.3s";
  teamSection.style.display = "none";
  teamSection.style.opacity = "0";
  teamSection.style.transition = "opacity 0.3s";

  // Add click event listeners to tabs
  resultTab.addEventListener("click", function () {
      resultTab.classList.add("active");
      scoreTab.classList.remove("active");
      killsTab.classList.remove("active");
      teamTab.classList.remove("active");
      resultSection.style.display = "grid";
      scoreSection.style.display = "none";
      killsSection.style.display = "none";
      teamSection.style.display = "none";
  });

  scoreTab.addEventListener("click", function () {
      scoreTab.classList.add("active");
      resultTab.classList.remove("active");
      killsTab.classList.remove("active");
      teamTab.classList.remove("active");
      scoreSection.style.display = "block";
      resultSection.style.display = "none";
      killsSection.style.display = "none";
      teamSection.style.display = "none";
  });
  killsTab.addEventListener("click", function () {
      killsTab.classList.add("active");
      resultTab.classList.remove("active");
      scoreTab.classList.remove("active");
      teamTab.classList.remove("active");
      killsSection.style.display = "block";
      resultSection.style.display = "none";
      scoreSection.style.display = "none";
      teamSection.style.display = "none";
  });
  teamTab.addEventListener("click", function () {
      teamTab.classList.add("active");
      resultTab.classList.remove("active");
      killsTab.classList.remove("active");
      scoreTab.classList.remove("active");
      teamSection.style.display = "block";
      resultSection.style.display = "none";
      killsSection.style.display = "none";
      scoreSection.style.display = "none";
  });

 // Add transition and opacity when switching tabs
 function switchTabWithTransition(tabToShow, tabToHide) {
  tabToHide.style.opacity = "0";
  tabToHide.style.transition = "opacity 0.3s";
  tabToShow.style.opacity = "0";
  tabToShow.style.display = "grid";
  setTimeout(function () {
      tabToHide.style.display = "none";
      tabToShow.style.opacity = "1";
  }, 50);
 }
  resultTab.addEventListener("click", function () {
      resultTab.classList.add("active");
      scoreTab.classList.remove("active");
      killsTab.classList.remove("active");
      teamTab.classList.remove("active");
      switchTabWithTransition(resultSection, scoreSection,killsSection,teamSection);
  });

  scoreTab.addEventListener("click", function () {
      scoreTab.classList.add("active");
      resultTab.classList.remove("active");
      killsTab.classList.remove("active");
      teamTab.classList.remove("active");
      switchTabWithTransition(scoreSection, resultSection,killsSection,teamSection);
  });
  teamTab.addEventListener("click", function () {
      teamTab.classList.add("active");
      resultTab.classList.remove("active");
      killsTab.classList.remove("active");
      scoreTab.classList.remove("active");
      switchTabWithTransition(teamSection, resultSection,killsSection,scoreSection);
  });
  killsTab.addEventListener("click", function () {
      killsTab.classList.add("active");
      resultTab.classList.remove("active");
      teamTab.classList.remove("active");
      scoreTab.classList.remove("active");
      switchTabWithTransition(killsSection,scoreSection,teamSection, resultSection);
  });
});

