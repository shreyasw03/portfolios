
document.querySelectorAll(".plusminus").forEach(function(element) {
    element.addEventListener("click", function() {
        element.style.transform = "rotate(0deg)"
        setTimeout(function() {
            element.style.transform = "rotate(180deg)";
          }, 1000);
      document.querySelectorAll(".showansfreq").forEach(function(e) {
        e.style.height = "0";});
      const targetId = element.getAttribute("data-showansfreq");
      const showansfreq = document.getElementById(targetId);
    showansfreq.style.height = "135px";
      });
   
    });
