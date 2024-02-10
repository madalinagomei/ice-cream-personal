(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-about]"),
    closeModalBtn: document.querySelector("[data-modal-close-about]"),
    modal: document.querySelector("[data-modal-about]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open-about")
    refs.modal.classList.toggle("is-hidden");  
  }
})();    


// Модалка на кнопку в секції HERO 

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-hero]"),
    closeModalBtn: document.querySelector("[data-modal-close-hero]"),
    modal: document.querySelector("[data-modal-hero]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
   refs.modal.classList.toggle("is-hidden");
  }
})();



// Закрыть видео с потерей звука
// $('body').on('click','.js-trailer',function(){
//   $("#trailer-box").dialog({
//     modal: false,
//     show: 'fade',
//     hide: 'fade',
//     width: 800,
//     close: function(event) {$('.dleplyrplayer video').trigger('pause'); }
//   });	
//   return false;
// });

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-ice]"),
    closeModalBtn: document.querySelector("[data-modal-close-ice]"),
    modal: document.querySelector("[data-modal-ice]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // document.body.classList.toggle("modal-open-ice")
    refs.modal.classList.toggle("is-hidden");  
  }
})();    


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-coffe]"),
    closeModalBtn: document.querySelector("[data-modal-close-coffe]"),
    modal: document.querySelector("[data-modal-coffe]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // document.body.classList.toggle("modal-open-coffe")
    refs.modal.classList.toggle("is-hidden");  
  }
})();    


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-shakes]"),
    closeModalBtn: document.querySelector("[data-modal-close-shakes]"),
    modal: document.querySelector("[data-modal-shakes]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal); 
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // document.body.classList.toggle("modal-open-shakes")
    refs.modal.classList.toggle("is-hidden");  
  }
})();     

// Модалка на buy now в десктопній версії

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// Модалка на кнопці Franchise

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-fr]"),
    closeModalBtn: document.querySelector("[data-modal-close-fr]"),
    modal: document.querySelector("[data-modal-fr]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // document.body.classList.toggle("modal-open-fr")
    refs.modal.classList.toggle("is-hidden");
  }
})();


// Модалка на кнопці Our locations
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-loc]"),
    closeModalBtn: document.querySelector("[data-modal-close-loc]"),
    modal: document.querySelector("[data-modal-loc]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // document.body.classList.toggle("modal-open-fr")
    refs.modal.classList.toggle("modal-is-hidden");
  }
})();



// Модалка на buy now в таблетці та моб версії

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open2]"),
    closeModalBtn: document.querySelector("[data-modal-close2]"),
    modal: document.querySelector("[data-modal2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // document.body.classList.toggle("modal-open-fr")
    refs.modal.classList.toggle("is-hidden");
  }
})();











