const menuItems = document.querySelectorAll(".lain div");
const dialogs = document.querySelectorAll(".aboutdl");
const dalemnya = document.querySelector(".dalemnya");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const name = item.getAttribute("data-name");

    dialogs.forEach((dialog) => {
      const target = dialog.getAttribute("data-target");

      if (name === target) {
        dialog.classList.add("active");
        dalemnya.classList.add("active");
      }
    });
  });
});

document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".aboutdl").classList.remove("active");
    document.querySelector(".dalemnya").classList.remove("active");
  });
});
