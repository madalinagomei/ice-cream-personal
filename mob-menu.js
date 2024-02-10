// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
  
//     const toggleMenu = () => {
//       const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
  
//       const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     // Закрити мобільне меню, якщо змінюється розмір 

//     window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
  
//     // закрити мобільне меню
//   {
//     let tags = document.getElementsByClassName('header__mob-item');
//     let btn = document.querySelector('.buy-btn-mob');
  
//     let fun = function (e) {
//       e.addEventListener('click', toggleMenu);
//       }
      
//     fun(btn);
    
//     for (let i = 0; i < tags.length; i++) {
//       fun(tags[i]);
//     }
//   }
//   })();
  