function toggleBox(boxId) {
  const box = document.getElementById(boxId);
  const isExpanded = box.classList.contains('expanded');

  // Collapse all boxes
  document.querySelectorAll('.interactive-box').forEach((box) => {
      box.classList.remove('expanded');
      box.classList.add('collapsed');
  });

  // Expand the clicked box if it was collapsed
  if (!isExpanded) {
      box.classList.remove('collapsed');
      box.classList.add('expanded');
  }
}
