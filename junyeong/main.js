function nightDayHandler(self) {
  var target = document.querySelector("body");

  if (self.value === "night") {
    target.style.backgroundColor = "black";
    target.style.color = "white";
    self.value = "day";

    var alist = document.querySelectorAll("a");
    var i = 0;

    while (i < alist.length) {
      alist[i].style.color = "powderblue";
      i += 1;
    }
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    self.value = "night";

    var alist = document.querySelectorAll("a");
    var i = 0;

    while (i < alist.length) {
      alist[i].style.color = "blue";
      i += 1;
    }
  }
}

let isImageBig = false;
function changeImageSize() {
  const img = document.getElementsByTagName("img")[0];
  if (isImageBig) {
    img.classList.remove("big");
    isImageBig = false;
  } else {
    img.classList.add("big");
    isImageBig = true;
  }
}
