document.addEventListener('DOMContentLoaded', () => {
  const notReadyBtns = document.querySelectorAll('.not-ready-btn');

  // Redirect to coming-soon.html when any "not ready" button is clicked
  notReadyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent navigation or form submission
      window.location.href = 'coming-soon.html';
    });
  });
});
