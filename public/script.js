(function () {
  const btnOn = document.querySelector("#btnOn");
  const btnOff = document.querySelector("#btnOff");
  btnOn.addEventListener("click", function () {
    localStorage.setItem("JS", "ON");
    // deleteCookie('name');
    // setCookie("name", "value");
    document.cookie = "user=John";
    // setTimeout(( ) => window.location.reload(), 500)
  });
  btnOff.addEventListener("click", function () {
    localStorage.clear();
    // window.location.reload();
    // setTimeout(() => window.location.reload(), 500);
  });
})();
