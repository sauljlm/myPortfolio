(function () {
  const cont_projects = document.getElementById('cont-portfolio');
  const btn_submit = document.getElementById('btn_submit');
  const btn_menu = document.getElementById('btn-hamburguer');
  const menu = document.getElementById('menu').children;
  const cont_menu = document.getElementById('sidebar');

  function createProject(data) {
    data.projects.forEach((e) => {
      const cont_project = document.createElement('div');
      const cont_links = document.createElement('div');
      const link_code = document.createElement('a');
      const link_server = document.createElement('a');
      const icon_git = document.createElement('img');
      const icon_link = document.createElement('img');

      cont_links.setAttribute('class', 'portfolio__projects--hidden');
      cont_project.setAttribute('class', 'portfolio__projects');
      link_code.setAttribute('target', '_blank');
      link_code.setAttribute('href', `${e.link_gitHub}`);
      link_server.setAttribute('target', '_blank');
      link_server.setAttribute('href', `${e.github_pages}`);
      icon_git.setAttribute('class', 'img-icon icon');
      icon_git.setAttribute('src', `${e.svg_github}`);
      icon_git.setAttribute('alt', 'btn link repositories');
      icon_link.setAttribute('class', 'img-icon icon');
      icon_link.setAttribute('src', `${e.svg_link}`);
      icon_link.setAttribute('alt', 'btn link');

      cont_project.style.backgroundImage = `url(${e.Img_src})`;
      cont_project.style.backgroundSize = 'cover';

      link_code.appendChild(icon_git);
      link_server.appendChild(icon_link);
      cont_links.appendChild(link_code);
      cont_links.appendChild(link_server);
      cont_project.appendChild(cont_links);
      cont_projects.appendChild(cont_project);
    });
  }

  function getJson(url, funct) {
    fetch(url)
      .then(data => data.json())
      .then((data) => {
        if (typeof funct === 'function') {
          funct(data);
        }
      });
  }

  function animationMenu() {
    btn_menu.classList.toggle('active');
    cont_menu.classList.toggle('show');
  }

  for(let e of menu ){
    e.addEventListener('click', () => {
      btn_menu.classList.remove('active');
      cont_menu.classList.remove('show');
    });
  }

  btn_menu.addEventListener("click", animationMenu);

  window.onload = function() {
    getJson(`js/data.json`, createProject);
  };
})();
