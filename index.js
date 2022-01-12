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

window.addEventListener('DOMContentLoaded', () => {
  adjustDimensions();
  window.addEventListener('resize', () => {
    adjustDimensions();
  });
});

const adjustDimensions = () => {  
  const firstCurve = document.querySelector('#first-curve');
  const secondCurve = document.querySelector('#second-curve');
  const svgContainer = document.querySelector('#svg-container');
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1700) {
    svgContainer.setAttribute('height', 800);
    svgContainer.setAttribute('width', 800);
    firstCurve.setAttribute('d', 'M100 400, A1 1, 0, 0 1, 700 400');
    secondCurve.setAttribute('d', 'M50 410 A1 1, 0, 0 0, 750 410');
    return;
  }
  if (windowWidth >= 600) {
    svgContainer.setAttribute('height', 600);
    svgContainer.setAttribute('width', 600);
    firstCurve.setAttribute('d', 'M100 300, A1 1, 0, 0 1, 500 300');
    secondCurve.setAttribute('d', 'M60 310, A1 1, 0, 0 0, 540 310');
    return;
  }
  if (windowWidth >= 400) {
    svgContainer.setAttribute('height', 400);
    svgContainer.setAttribute('width', 400);
    firstCurve.setAttribute('d', 'M100 200, A1 1, 0, 0 1, 300 200');
    secondCurve.setAttribute('d', 'M80 210, A1 1, 0, 0 0, 320 210');
    return;
  }
  svgContainer.setAttribute('height', 300);
  svgContainer.setAttribute('width', 300);
  firstCurve.setAttribute('d', 'M50 150, A1 1, 0, 0 1, 250 150');
  secondCurve.setAttribute('d', 'M30 160, A1 1, 0, 0 0, 270 160');
};