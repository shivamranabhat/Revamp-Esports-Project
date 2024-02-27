
$(document).ready(function (){
    $("#moreBtn").click(function(event) {
        event.stopPropagation();
        $('#moreList').slideToggle();
      });

      $(".dot").click(function(event) {
        var list = $(this).children(".list");
        $(".list").not(list).removeClass("show");
        list.toggleClass("show");
    });
    
    $("#overview-nav-box").click(function(event) {
        $('#overview-box').slideToggle();
        $('#chevron-1').addClass("transition");
        $('#chevron-1').toggleClass("rotate");
      });
    $("#team-nav-box").click(function(event) {
        $('#team-member-box').slideToggle();
        $('#chevron-2').addClass("transition");
        $('#chevron-2').toggleClass("rotate");
      });
    $("#tournament-nav-box").click(function(event) {
        $('#tournament-box').slideToggle();
        $('#chevron-3').addClass("transition");
        $('#chevron-3').toggleClass("rotate");
      });
})

document.addEventListener("DOMContentLoaded", function () {
    // three dot select
    var moreBtn = document.getElementById('dot');
    var dropdownList = document.getElementById('list');

    moreBtn.addEventListener('click', function() {
        dropdownList.classList.toggle('show');
    });
     // three dot select
  const overviewTab = document.getElementById("overview-tab");
  const participantsTab = document.getElementById("participants-tab");
  const overviewSection = document.getElementById("overview");
  const participantsSection = document.getElementById("participants");

  // Initially show the overview section and highlight its tab
  overviewTab.classList.add("active");
  overviewSection.style.display = "grid";
  participantsSection.style.display = "none";
  participantsSection.style.opacity = "0";
  participantsSection.style.transition = "opacity 0.3s";

  // Add click event listeners to tabs
  overviewTab.addEventListener("click", function () {
      overviewTab.classList.add("active");
      participantsTab.classList.remove("active");
      overviewSection.style.display = "grid";
      participantsSection.style.display = "none";
  });

  participantsTab.addEventListener("click", function () {
      participantsTab.classList.add("active");
      overviewTab.classList.remove("active");
      participantsSection.style.display = "block";
      overviewSection.style.display = "none";
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
  overviewTab.addEventListener("click", function () {
      overviewTab.classList.add("active");
      participantsTab.classList.remove("active");
      switchTabWithTransition(overviewSection, participantsSection);
  });

  participantsTab.addEventListener("click", function () {
      participantsTab.classList.add("active");
      overviewTab.classList.remove("active");
      switchTabWithTransition(participantsSection, overviewSection);
  });
});

