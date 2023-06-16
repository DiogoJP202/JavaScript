const request = obj => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest(); //Construtor
        //xhr.open(GET, URL, (assincrono ou não));
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){ // Código HTTP.
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });  
    })
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); //Verifica a tag e deixa em letra minuscula.
    
    if(tag === 'a'){
        e.preventDefault(); // Previne o evento (do link, no caso).
        carregaPagina(el);
    };
});

async function carregaPagina(el){
    const href = el.getAttribute('href');  //Pega o atributo 'href' do link.
    
    try{
        const response = await request({ // Envia essas informações para o 
            method: 'GET',
            url: href,
        });
        carregaResultado(response);
    } catch(erro){
        console.log(erro);
    };
    
    function carregaResultado(response){
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = response;
    }
}