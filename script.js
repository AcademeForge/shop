document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cookingModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const notReadyBtns = document.querySelectorAll('.not-ready-btn');

  // Open modal when any "not ready" button is clicked
  notReadyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent navigation or form submission
      modal.classList.add('active');
    });
  });

  // Close modal when OK button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Close modal when clicking outside the content box
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});
