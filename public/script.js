(function () {
  const btnOn = document.querySelector("#btnOn");
  const btnOff = document.querySelector("#btnOff");
  btnOn.addEventListener("click", function () {
    localStorage.setItem("JS", "ON");
    // window.location.reload();
  });
  btnOff.addEventListener("click", function () {
    localStorage.clear();
    // window.location.reload();
  });
})();
