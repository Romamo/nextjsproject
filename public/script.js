(function () {
  const btnOn = document.querySelector("#btnOn");
  const btnOff = document.querySelector("#btnOff");
  btnOn.addEventListener("click", function () {
    document.cookie = "name=user;max-age=30";
  });
  btnOff.addEventListener("click", function () {
    document.cookie = "name=user;max-age=-1";
  });
})();
