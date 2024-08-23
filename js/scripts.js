let header = document.querySelector('#header')

document.addEventListener('scroll', () => {

    let scrollTop = window.scrollY

    if(scrollTop > 200) {
        header.classList.add('rolar')
    } else {
        header.classList.remove('rolar') 
    }
})