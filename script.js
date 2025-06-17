const obras = document.querySelectorAll(".obra-container")
// const saibaMais = document.querySelectorAll(".")

window.addEventListener("scroll", function(){
    let header = document.querySelector('#interface')
    header.classList.toggle('rolagem',this.window.scrollY > 0)
})


obras.forEach((obra) => {
    obra.addEventListener('mouseenter', () => {
    
        const container = obra.closest('.obra-container');
        const overlay = container.querySelector('.overlay');

        // const largura = obra.clientWidth;
        // console.log(largura)

        // const larguraCalculada = (largura-153)/2

        // console.log(overlay)
        // overlay.style.paddingLeft = larguraCalculada + "px"
        overlay.style.display = 'flex';

    })
    obra.addEventListener('mouseleave', () => {
        const container = obra.closest('.obra-container');
        const overlay = container.querySelector('.overlay');
        
        overlay.style.display = 'none';
        
    })
});






