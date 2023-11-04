/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper('.testimonial-swiper', {
  spaceBetween: 30,
  loop: 'true',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper('.new-swiper', {
  spaceBetween: 24,
  loop: 'true',

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
  cartShop = document.getElementById('cart-shop'),
  cartClose = document.getElementById('cart-close');

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener('click', () => {
    cart.classList.add('show-cart');
  });
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener('click', () => {
    cart.classList.remove('show-cart');
  });
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// JavaScript
function addToCart(button) {
  const cartCount = document.querySelector('#cart-count');

  let itemCount = parseInt(cartCount.textContent || '0');

  itemCount++;
  cartCount.textContent = itemCount;
  cartCount.style.display = 'block';
}

// JavaScript
const cartVariable = {
  items: {},
  totalCount: 0,
  updateCount() {
    this.totalCount = Object.values(this.items).reduce(
      (total, quantity) => total + quantity,
      0
    );
  },
  addItem(itemName) {
    if (!this.items[itemName]) {
      this.items[itemName] = 0;
    }
    this.items[itemName]++;
    this.updateCount();
  },
  removeItem(itemName) {
    if (this.items[itemName]) {
      this.items[itemName]--;
      if (this.items[itemName] === 0) {
        delete this.items[itemName];
      }
      this.updateCount();
    }
  },
};

function updateCartDisplay() {
  const cartCount = document.querySelector('#cart-count');

  if (cartVariable.totalCount === 0) {
    cartCount.style.display = 'none';
  } else {
    cartCount.style.display = 'block';
  }

  cartCount.textContent = cart.totalCount;
}

// Call the function to initialize cart count
updateCartDisplay();

function generateProductsSection() {
  // Create a section element with class and id attributes
  const productsSection = document.createElement('section');
  productsSection.className = 'products section container';
  productsSection.id = 'products';

  // Create an h2 element with a class
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section__title';
  sectionTitle.textContent = 'Products';

  // Create a div element with a class
  const productsContainer = document.createElement('div');
  productsContainer.className = 'products__container grid';

  // Product data (you can replace this with your actual product data)
  const productsData = [
    {
      imgSrc: 'assets/img/product1.png',
      title: 'Spirit rose',
      price: 1500, // Change to a numeric value for sorting
    },
    {
      imgSrc: 'assets/img/product2.png',
      title: 'Khaki pilot',
      price: 1350,
    },
    {
      imgSrc: 'assets/img/product3.png',
      title: 'Jubilee black',
      price: 870,
    },
    {
      imgSrc: 'assets/img/product4.png',
      title: 'Fosil me3',
      price: 650,
    },
    {
      imgSrc: 'assets/img/product5.png',
      title: 'Duchen',
      price: 950,
    },
  ];

  const sortedProductsData = reverseBubbleSort(productsData);

  sortedProductsData.forEach((product) => {
    const productCard = document.createElement('article');
    productCard.className = 'products__card';

    const productImage = document.createElement('img');
    productImage.src = product.imgSrc;
    productImage.alt = '';
    productImage.className = 'products__img';

    const productTitle = document.createElement('h3');
    productTitle.className = 'products__title';
    productTitle.textContent = product.title;

    const productPrice = document.createElement('span');
    productPrice.className = 'products__price';
    productPrice.textContent = '$' + product.price;

    const productButton = document.createElement('button');
    productButton.className = 'products__button';

    const shoppingBagIcon = document.createElement('i');
    shoppingBagIcon.className = 'bx bx-shopping-bag';

    productButton.appendChild(shoppingBagIcon);

    productCard.appendChild(productImage);
    productCard.appendChild(productTitle);
    productCard.appendChild(productPrice);
    productCard.appendChild(productButton);

    productsContainer.appendChild(productCard);
  });

  productsSection.appendChild(sectionTitle);
  productsSection.appendChild(productsContainer);

  document.body.appendChild(productsSection);
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (const element of arr) {
    if (element.price < pivot.price) {
      left.push(element);
    } else if (element.price > pivot.price) {
      right.push(element);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i].price < arr[i + 1].price) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}



function reverseBubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i].price > arr[i + 1].price) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}


function reverseQuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (const element of arr) {
    if (element.price > pivot.price) {
      left.push(element);
    } else if (element.price < pivot.price) {
      right.push(element);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
