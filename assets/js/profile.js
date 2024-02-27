
document.addEventListener("DOMContentLoaded", function () {
  const profileTab = document.getElementById("profile-tab");
  const teamTab = document.getElementById("team-tab");
  const profileSection = document.getElementById("profile-card");
  const teamSection = document.getElementById("team-card");


  // Initially show the overview section and highlight its tab
  profileTab.classList.add("active");
  profileSection.style.display = "flex";
  teamSection.style.display = "none";
  teamSection.style.opacity = "0";
  teamSection.style.transition = "opacity 0.3s";

  // Add click event listeners to tabs
  profileTab.addEventListener("click", function () {
      profileTab.classList.add("active");
      teamTab.classList.remove("active");
      profileSection.style.display = "grid";
      teamSection.style.display = "none";
  });

  teamTab.addEventListener("click", function () {
      teamTab.classList.add("active");
      profileTab.classList.remove("active");
      teamSection.style.display = "block";
      profileSection.style.display = "none";
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
  profileTab.addEventListener("click", function () {
      profileTab.classList.add("active");
      teamTab.classList.remove("active");
      switchTabWithTransition(profileSection, teamSection);
  });

  teamTab.addEventListener("click", function () {
      teamTab.classList.add("active");
      profileTab.classList.remove("active");
      switchTabWithTransition(teamSection, profileSection);
  });
});

