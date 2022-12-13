document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); //Verifica a tag e deixa em letra minuscula.
    
    if(tag === 'a'){
        e.preventDefault(); // Previne o evento (do link, no caso).
        carregaPagina(el);
    };
});

function carregaPagina(el){
    const href = el.getAttribute('href');  //Pega o atributo 'href' do link.
    
        fetch(href).then(response => {
            if(response.status >= 200 && response.status < 300){ // Código HTTP.
                return response.text();
            } else {
                throw new Error(response.statusText)
            }
        }).then(html => carregaResultado(html)).catch(e => console.error(e));
    
    function carregaResultado(response){
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = response;
    }
}