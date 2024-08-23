// JavaScript to toggle visibility of boxes
function toggleBox(boxId) {
    // Get all interactive boxes
    const boxes = document.querySelectorAll('.interactive-box');

    // Loop through all boxes and close them if they aren't the clicked one
    boxes.forEach(box => {
        const content = box.querySelector('.interactive-box-content');
        if (box.id === boxId) {
            // Toggle the clicked box
            content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        } else {
            // Close any other open box
            content.style.display = 'none';
        }
    });
}

// Ensure all boxes start closed
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.interactive-box-content');
    boxes.forEach(content => content.style.display = 'none');
});
