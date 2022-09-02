(function () {
  const btnOn = document.querySelector("#btnOn");
  const btnOff = document.querySelector("#btnOff");
  btnOn.addEventListener("click", function () {
    // localStorage.setItem("JS", "ON");
    document.cookie = "name=user;max-age=120";
    // setTimeout(( ) => window.location.reload(), 500)
  });
  btnOff.addEventListener("click", function () {
    // localStorage.clear();
    document.cookie = "name=user;max-age=-1";
    // setTimeout(() => window.location.reload(), 500);
  });
})();
