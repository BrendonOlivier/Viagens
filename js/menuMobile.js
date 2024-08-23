let btnMenuMob = document.getElementById('btn-menu-mob');
let line1 = document.querySelector('.line-menu-mob-1');
let line2 = document.querySelector('.line-menu-mob-2');
let menuMobile = document.getElementById('menu-mobile');
let menuLinks = menuMobile.querySelectorAll('nav ul li a'); // Pegando todos os links do menu mobile 

let body = document.querySelector('body')

// Função para abrir e fechar o menu 
function toggleMenu() {  
    line1.classList.toggle('ativo1');  
    line2.classList.toggle('ativo2');  
    menuMobile.classList.toggle('abrir');  
    body.classList.toggle('no-overflow');  
}  

// Evento para abrir o menu mobile ao clicar no botão  
btnMenuMob.addEventListener('click', toggleMenu)

// Adiciona evento a cada link para fechar o menu ao clicar  
menuLinks.forEach(link => {  
    link.addEventListener('click', () => {  
        // Fecha o menu e remove a classe de overflow  
        if (menuMobile.classList.contains('abrir')) {  
            toggleMenu();  
        }  
    });  
}); 