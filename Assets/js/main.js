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