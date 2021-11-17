const panels = document.querySelectorAll(".panel");

// Expand on click

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClassesFirst();
    panel.classList.add("active");
  });
});

// xpand on Hover
// panels.forEach((panel) => {
//   panel.addEventListener("mouseover", () => {
//     removeClassesFirst();
//     panel.classList.add("active");
//   });
// });
function removeClassesFirst() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
