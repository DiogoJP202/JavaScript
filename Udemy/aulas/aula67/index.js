document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); //Verifica a tag e deixa em letra minuscula.
    
    if(tag === 'a'){
        e.preventDefault(); // Previne o evento (do link, no caso).
        carregaPagina(el);
    };
});

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');  //Pega o atributo 'href' do link.
        const response = await fetch(href);

        if(!response.status >= 200 && !response.status < 300) throw new Error(response.statusText); 

        const html = await response.text();
        carregaResultado(html);
    } catch(erro){
        console.log(erro);
    };
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}