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

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzsNUxbd_bolmpy1OAdDlGlVmAosZD2dG5xiqbBJQTPX3Ww-WQrWpwehn4YSKFPJzuq/exec";
const form = document.forms["mesageee"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
