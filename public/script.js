(function () {
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", function () {
    if (btn.hasAttribute("data-boolean")) {
      btn.removeAttribute("data-boolean");
      console.log(btn);
      console.log(button);
    } else {
      btn.setAttribute("data-boolean", true);
      console.log(btn);
    }
  });
})();
