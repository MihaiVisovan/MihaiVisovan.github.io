const showProjects = () => {
  const projectsText = document.getElementById('projects');
  const projectsTextPath = projectsText.firstElementChild;
  const projectsAnchor = projectsTextPath.firstElementChild;
  
  const textValue = projectsTextPath.textContent.replace(/\s{3,}/g,' ').trim();
  const menu = document.getElementsByClassName('menu')[0];
  const showMenu = textValue === 'Projects';

  if (showMenu) {
    menu.classList.add('text-pop-up-bottom');
    projectsAnchor.textContent = 'Return';
    setTimeout(() => {
      menu.style.display = 'block';
    }, 500);
  } else {
    menu.classList.add('text-pop-up-top');
    projectsAnchor.textContent = 'Projects';
    setTimeout(() => {
      menu.style.display = 'none';
    }, 500);
  }

  setTimeout(() => {
    menu.classList.remove('text-pop-up-top');
    menu.classList.remove('text-pop-up-bottom');
  }, 1000);
};