window.addEventListener("scroll", function () {
    const header = document.getElementById("header") as HTMLElement;
    if (window.scrollY > 0.0001) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
  });
  