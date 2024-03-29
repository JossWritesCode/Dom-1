const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const codePic = document.getElementById('cta-img');
codePic.setAttribute('src', siteContent['cta']['img-src']);

const midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];

const nav = document.querySelector('nav');
const newATag = document.createElement('a');
const otherNewATag = document.createElement('a');
const resourcesText = document.createTextNode('Resources');
const extrasText = document.createTextNode('Extras');

newATag.appendChild(resourcesText);
nav.appendChild(newATag);

otherNewATag.appendChild(extrasText);
nav.appendChild(otherNewATag);

const allNavLinks = document.querySelectorAll('nav a');

allNavLinks.forEach(link => {
  link.style.color = 'green';
});

const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

button.addEventListener('click', event => {
  allNavLinks.forEach(link => {
    link.style.color = 'blue';
  });
});

const h4s = document.querySelectorAll('h4');
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];
h4s[5].textContent = siteContent['contact']['contact-h4'];

const ps = document.querySelectorAll('p');
ps[0].textContent = siteContent['main-content']['features-content'];
ps[1].textContent = siteContent['main-content']['about-content'];
ps[2].textContent = siteContent['main-content']['services-content'];
ps[3].textContent = siteContent['main-content']['product-content'];
ps[4].textContent = siteContent['main-content']['vision-content'];

ps[5].textContent = siteContent['contact']['address'];
ps[6].textContent = siteContent['contact']['phone'];
ps[7].textContent = siteContent['contact']['email'];

ps[8].textContent = siteContent['footer']['copyright'];
