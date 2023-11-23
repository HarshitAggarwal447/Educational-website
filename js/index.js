// changing navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
}) // show nav bar blue color after scroll



// to show or hide the answer in frequently ask questions
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        //to change icon + to -
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }
        else{
            (icon.className = 'uil uil-plus')
        }
    })
})

 

// to show or hide nav menue in tablets or phnes fron 3 lines
const menue = document.querySelector(".nav_menue");
const menueBtn = document.querySelector("#open-menu-bts");
const closeBtn = document.querySelector("#close-menu-bts");

// for open nav menue
menueBtn.addEventListener('click', () => {
    menue.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menueBtn.style.display = "none";
})
// for close nav menue
const closenav = () => {
    menue.style.display = "none";
    closeBtn.style.display = "none";
    menueBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closenav);