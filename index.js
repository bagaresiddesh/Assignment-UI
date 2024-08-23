// JavaScript to toggle visibility of boxes
function toggleBox(boxId) {
  // Get all interactive boxes
  const boxes = document.querySelectorAll(".interactive-box");

  // Loop through all boxes and handle the click
  boxes.forEach((box) => {
    if (box.id === boxId) {
      // Toggle the clicked box between collapsed and expanded
      box.classList.toggle("expanded");
      box.classList.toggle("collapsed");
    } else {
      // Ensure all other boxes are collapsed
      box.classList.add("collapsed");
      box.classList.remove("expanded");
    }
  });
}

// Ensure all boxes start collapsed
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".interactive-box");
  boxes.forEach((box) => box.classList.add("collapsed"));
});
