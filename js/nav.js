const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("nav");

navToggle.addEventListener('click', () => {
    
    let visible = (nav.getAttribute('data-visible') == 'true') ? false : true;
    nav.setAttribute('data-visible', visible );

})