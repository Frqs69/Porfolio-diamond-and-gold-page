const footerYear=document.querySelector('.footer__year');
const navMobile=document.querySelector('.nav-mobile');
const navBtn=document.querySelector('.hamburger');
const nav=document.querySelector('.nav');
const allNavItems=document.querySelectorAll('.nav__link')

//otwieranie menu na telefonach
const handleNav= () =>{
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    navBtn.classList.toggle('btn-fixed');

    allNavItems.forEach(item=> {
        item.addEventListener('click',()=>{
            nav.classList.remove('nav-mobile--active');
            navBtn.classList.remove('is-active');
            navBtn.classList.remove('btn-fixed');
        })
    })
}


const handleCurrentYear = () =>{
    const year = (new Date).getFullYear();
    footerYear.innerText=year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav);