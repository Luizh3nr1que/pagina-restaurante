AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const buttonAbrirMenu = document.querySelector('.iconMenu');
const MenuConteudo = document.querySelector('.menuMobile');
const fecharMenu = document.querySelector('.fecharMenu');

buttonAbrirMenu.addEventListener('click', () => {
    MenuConteudo.classList.remove('animationCloseMenu');
    MenuConteudo.classList.add('animationOpenMenu');
    MenuConteudo.style.display = 'block';
});

fecharMenu.addEventListener('click', () => {
    MenuConteudo.classList.remove('animationOpenMenu');
    MenuConteudo.classList.add('animationCloseMenu');
    setTimeout(() => {
        MenuConteudo.style.display = 'none';
    }, 300);
});




const linksA = document.querySelectorAll('.link');

linksA.forEach(linksA => {
    linksA.addEventListener('click', () => {
        MenuConteudo.classList.remove('animationOpenMenu');
        MenuConteudo.classList.add('animationCloseMenu');
        setTimeout(() => {
            MenuConteudo.style.display = 'none';
        }, 300);
    })
})



const img = document.querySelectorAll('img');

img.forEach(img => {
    img.draggable = false;
})



