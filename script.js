// Disable right-click context menu
document.addEventListener('contextmenu', e => e.preventDefault());

// Block common keyboard shortcuts to view source / devtools
document.addEventListener('keydown', e => {
  const blocked =
    e.key === 'F12' ||
    (e.ctrlKey && e.key === 'u') ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.shiftKey && e.key === 'C') ||
    (e.metaKey && e.altKey && e.key === 'i') ||
    (e.metaKey && e.altKey && e.key === 'j') ||
    (e.metaKey && e.altKey && e.key === 'u');
  if (blocked) e.preventDefault();
});

const nav = document.getElementById('nav');
const contentEl = document.getElementById('main-content');

// Build nav from data
const ul = document.createElement('ul');
SECTIONS.forEach((section, index) => {
  const li = document.createElement('li');
  li.textContent = section.label;
  li.dataset.index = index;
  if (index === 0) li.classList.add('active');
  li.addEventListener('click', () => loadSection(index, li));
  ul.appendChild(li);
});
nav.appendChild(ul);

function loadSection(index, clickedLi) {
  ul.querySelectorAll('li').forEach(li => li.classList.remove('active'));
  clickedLi.classList.add('active');
  contentEl.innerHTML = SECTIONS[index].render();
}

// Load first section on init
loadSection(0, ul.querySelector('li'));
