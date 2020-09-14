const panels = document.querySelectorAll(".panel");

function addAndRemoveOpen() {
  panels.forEach((panel) =>
    panel.classList.contains("open") ? panel.classList.remove("open") : null
  );
  this.classList.add("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", addAndRemoveOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
