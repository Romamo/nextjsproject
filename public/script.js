(function () {
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", function () {
    if (btn.hasAttribute("data-boolean")) {
      btn.removeAttribute("data-boolean");
      console.log(btn);
      localStorage.setItem("myCat", "Tom");
      console.log(window.localStorage);
      window.location.reload();
    } else {
      btn.setAttribute("data-boolean", true);
      console.log(btn);
      console.log(localStorage.getItem("myCat"));
      window.location.reload();
    }
  });
})();
