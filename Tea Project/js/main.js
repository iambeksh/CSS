const menuBtn = document.querySelector('.menu_Btn');
const menuClose = document.querySelector('.menu_Close');
const menuList = document.querySelector('.menu_List');
const menuShadow = document.querySelector('.menu--close');




menuBtn.addEventListener('click', ()=>{
    menuShadow.classList.toggle('menu--open');
    menuList.classList.toggle('menu_List--open');
});
menuClose.addEventListener('click', ()=>{
    menuShadow.classList.remove('menu--open');
    menuList.classList.remove('menu_List--open');
});