'use strict';

gsap.from('nav', { duration: 1, y: '-100%', ease: 'bounce' });
gsap.from('li', { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// Wait for the document to load
document.addEventListener('DOMContentLoaded', function () {
  // Get all the mobile navbar links
  var navbarLinks = document.querySelectorAll('.navbar ul li a');

  // Attach a click event listener to each link
  navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Close the mobile menu
      var checkbox = document.getElementById('check');
      checkbox.checked = false;

      // Get the target section ID from the link's href attribute
      var targetSectionId = link.getAttribute('href');

      // Scroll to the target section smoothly
      document.querySelector(targetSectionId).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});

/* Content */
const home = {
  title: 'Frontend Developer',
};
const about = {
  title: 'My Journey',
  description:
    "As a frontend developer, my dedication is intricately woven with my faith in Jesus Christ. Witnessing the transformative power of love through my wife's family gatherings and connecting with my heritage in Cambodia ignited a passion to create digital experiences that foster unity and belonging. Guided by faith, inspired by love, and committed to excellence, my goal is to make a meaningful impact by using technology and design to touch lives.",
};
/* Manipulate DOM elements */
document.getElementById('home__Description').innerText = home.title;
document.getElementById('about__Title').innerText = about.title;
document.getElementById('about__Description').innerText = about.description;

/* Project */

const project1 = {
  title: 'Delivery App',
  description: 'Dry cleaner Delivery App',
  github: 'https://github.com/PhilipCheang/Delivery',
  live: 'https://delivery-ivory.vercel.app/',
  image: '/delivery.jpg',
};
const project2 = {
  title: 'Ecommerce App',
  description: 'Dry cleaner Ecommerce',
  github: 'https://github.com/PhilipCheang/Ecommerce-Front',
  live: 'https://ecommerce-front-six-lac.vercel.app',
  image: '/Jacqui.png',
};
const project3 = {
  title: 'Fish Log',
  description: 'Click on map to log your fishing trip onto a local storage',
  github: 'https://github.com/PhilipCheang/FishOn',
  live: 'https://fish-on.vercel.app/',
  image: '/fishon.jpg',
};
const project4 = {
  title: 'Donut',
  description: 'Landing page for a local donut shop',
  github: 'https://github.com/PhilipCheang/donutshop',
  live: 'https://donutshop-alpha.vercel.app/',
  image: '/donut.png',
};
const project5 = {
  title: 'Admin Page',
  description: 'Track Live Orders and Edit/Update Services',
  github: 'https://github.com/PhilipCheang/ecom-admin',
  live: 'https://ecom-admin-plum.vercel.app/',
  image: '/admin.png',
};
const project6 = {
  title: 'Bankist',
  description: 'Bank app login user: pc pin: 1111',
  github: 'https://github.com/PhilipCheang/bankist',
  live: 'https://bankist-eight.vercel.app/',
  image: '/bankist.jpg',
};
const project7 = {
  title: 'NeighborQuest',
  description: 'Fetch rest countries api',
  github: 'https://github.com/PhilipCheang/neighborquest',
  live: 'https://neighborquest.vercel.app/',
  image: '/neighborquest.jpg',
};

const projects = [project1, project2, project3, project5, project6, project7];

const createProjectCards = function (projects) {
  const projectSection = document.getElementById('project__Cards');

  projects.forEach(function (project) {
    const card = `
    <div class="project__card">
      <div class="card__wrapper">
        <img class="card__image" src="${project.image}" alt="${project.title}">
        <div class="card__content">
          <h2 class="card__title">${project.title}</h2>
          <p class="card__description">${project.description}</p>
        </div>
        <div class="card__links">
          <a href="${project.github}" target="_blank" class="github__link">GitHub</a>
          <a href="${project.live}" target="_blank" class="live__link">Demo</a>
        </div>
      </div>
    </div>
  `;
    projectSection.insertAdjacentHTML('beforeend', card);
  });
};
createProjectCards(projects);

/* Modal Contact */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const hidden = document.querySelector('.hidden');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // window.scrollTo(0, 0);
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && modal.classList.contains('hidden')) {
    openModal();
  }
});

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// const navbarContact = document.querySelector('#navbar__Contact');

// navbarContact.addEventListener('click', function (e) {
//   e.preventDefault();
//   openModal();
// });

/* Open new Window to Blog Link */
const navbarBlog = document.querySelector('#navbar__Blog');

const openBlog = function () {
  const blogLink = 'https://dailyj.cyclic.app/';
  window.open(blogLink, '_blank');
};

navbarBlog.addEventListener('click', function (e) {
  e.preventDefault();
  openBlog();
});

// /* Contact Form */

// document
//   .getElementById('contactForm')
//   .addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('msg').value;

//     // Perform form validation (optional)
//     if (!name || !email || !message) {
//       alert('Please fill in all fields');
//       return;
//     }

//     // Send the form data to the server (replace with your own implementation)
//     sendFormData(name, email, message);

//     // Reset the form after submission
//     document.getElementById('contactForm').reset();
//   });

// function sendFormData(name, email, message) {
//   var formData = {
//     name: name,
//     email: email,
//     message: message,
//   };

//   fetch('/your-server-endpoint', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then(function (response) {
//       if (response.ok) {
//         // Success message or further processing
//         alert('Form submitted successfully');
//       } else {
//         // Error handling
//         alert('Form submission failed');
//       }
//     })
//     .catch(function (error) {
//       // Error handling
//       alert('An error occurred');
//       console.log(error);
//     });
// }
