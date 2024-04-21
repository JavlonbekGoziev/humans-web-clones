
document.addEventListener("DOMContentLoaded", function () {
    const currentLangBtn = document.getElementById("current-lang");
    const langOptions = document.querySelector(".lang-options");
  
    currentLangBtn.addEventListener("click", function () {
      langOptions.classList.toggle("show");
    });
  
    langOptions.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        const selectedLang = e.target.getAttribute("lang");
        currentLangBtn.textContent = selectedLang;
        langOptions.classList.remove("show");
      }
    });
  

    window.addEventListener("click", function (e) {
      if (!langOptions.contains(e.target) && e.target !== currentLangBtn) {
        langOptions.classList.remove("show");
      }
    });
  });
  