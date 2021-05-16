const hiden = document.querySelector('.hiden-menu');
let btnmenu = document.querySelector('.menu-link-main');

btnmenu.onclick = function(){
    hiden.classList.toggle('active');
} 