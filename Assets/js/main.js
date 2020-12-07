/* ===== Menu Show ===== */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* ===== Active And Remove Menu ===== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ===== Scroll Reveal Animation ===== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*===== Scroll Home =====*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{interval: 200});

/*===== Scroll About =====*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 200});
sr.reveal('.about__text',{delay: 400});

/*===== Scroll Skills =====*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{delay: 200});
sr.reveal('.skills__img',{interval: 200});

/*===== Scroll Projects =====*/
sr.reveal('.projects__subtitle',{}); 
sr.reveal('.projects__text',{delay: 200});

/*===== Scroll Work =====*/
sr.reveal('.work__subtitle',{}); 
sr.reveal('.work__text',{delay: 200});

/*===== Scroll Contact =====*/
sr.reveal('.contact__input',{interval: 200}); 

/*===== Form =====*/

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("contact__form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  