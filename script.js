// Get modal elements
const modal = document.getElementById('profileModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');
const closeBtn = document.querySelector('.close');

// Select all team members
const teamMembers = document.querySelectorAll('.team-member');

// Add click event to each card
teamMembers.forEach(member => {
  member.addEventListener('click', () => {
    modalImage.src = member.dataset.image;
    modalName.textContent = member.dataset.name;
    modalRole.textContent = member.dataset.role;
    modalBio.textContent = member.dataset.bio;
    modal.style.display = 'flex';
  });
});

// Close modal on X click
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
