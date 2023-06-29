'use strict';

/* Content */
const home = {
  title: 'Frontend Developer',
};
const about = {
  title: 'My Journey',
  description:
    "In the tapestry of my life, the threads of my dedication as a frontend developer are intricately woven with the profound influence of my unwavering faith in Jesus Christ. Along this journey, love found its way into my heart when I met my wife, whose family's tradition of gathering together for lunch sparked a realization within me. Witnessing their unity and the warmth that emanated from their bond, I understood the transformative power of love and connection. This newfound understanding, combined with my visits to my parent's homeland Cambodia, where I encountered people who shared my features and heritage, ignited a fire within me to be more, to do more. It inspired me to channel my passion for frontend development into meaningful contributions, driven by a deep desire to create digital experiences that foster connection, unity, and a sense of belonging for all who engage with them. With faith as my guide, love as my inspiration, and a commitment to excellence, I am determined to weave a story of impact, touching lives through the power of technology and design.",
};
/* Manipulate DOM elements */
document.getElementById('home__Description').innerText = home.title;
document.getElementById('about__Title').innerText = about.title;
document.getElementById('about__Description').innerText = about.description;

/* Project */

const project1 = {
  title: 'Donut',
  description: 'Landing page for a local donut shop',
  github: 'https://github.com/PhilipCheang/donutshop',
  live: 'https://donutshop-alpha.vercel.app/',
  image: '/donut.png',
};
const project2 = {
  title: 'Dry Cleaner',
  description: 'Dry cleaner wanting to add a pick up and delivery',
  github: 'https://github.com/PhilipCheang/Ecommerce-Front',
  live: 'https://ecommerce-front-six-lac.vercel.app',
  image: '/Jacqui.png',
};
const project3 = {
  title: 'Dry Cleaner Admin Page',
  description: 'Track Live Orders and Edit/Update Services',
  github: 'https://github.com/PhilipCheang/ecom-admin',
  live: 'https://ecom-admin-plum.vercel.app/',
  image: '/admin.png',
};

const projects = [project1, project2, project3];

function createProjectCards(projects) {
  const projectSection = document.getElementById('project__Cards');

  projects.forEach(project => {
    const card = `
    <div class="project-card">
      <div class="card-wrapper">
      <img src="${project.image}" alt="${project.title}" class="card-image">
        <div class="card-content">
          <h2 class="card-title">${project.title}</h2>
          <p class="card-description">${project.description}</p>
        </div>
        <div class="card-links">
          <a href="${project.github}" target="_blank" class="card-link">GitHub</a>
          <a href="${project.live}" target="_blank" class="card-link">Live Demo</a>
        </div>
      </div>
    </div>
  `;

    projectSection.insertAdjacentHTML('beforeend', card);
  });
}
createProjectCards(projects);
