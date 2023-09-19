const list = document.querySelectorAll(".questions__icon");
const mentors = document.querySelectorAll(".mentor__item_name");

list.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.currentTarget.children[2];
    if (this.classList.contains("questions__icon--click")) {
      this.classList.remove("questions__icon--click");
      e.currentTarget.children[0].classList.remove(
        "questions__icon-line--click"
      );
      e.currentTarget.children[1].classList.remove(
        "questions__icon-line--click"
      );
      e.currentTarget.children[1].classList.remove("line-second--click");
      e.currentTarget.parentNode.children[1].children[0].style.color =
        "#121314";
      e.currentTarget.parentNode.children[1].children[1].style.display = "none";
    } else {
      this.classList.add("questions__icon--click");
      e.currentTarget.children[0].classList.add("questions__icon-line--click");
      e.currentTarget.children[1].classList.add("questions__icon-line--click");
      e.currentTarget.children[1].classList.add("line-second--click");
      e.currentTarget.parentNode.children[1].children[0].style.color =
        "#0091AD";
      e.currentTarget.parentNode.children[1].children[1].style.display =
        "block";
    }
  });
});
