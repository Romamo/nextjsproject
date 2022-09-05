if (document.querySelector("#btnOn")) {
  document.querySelector("#btnOn").addEventListener("click", function () {
    document.cookie = "name=user;max-age=30";
  });
}
