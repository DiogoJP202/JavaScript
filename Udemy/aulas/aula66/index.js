document.addEventListener('click', (event) => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();
    
    if(tag === 'a'){
        let href = element.getAttribute("href");

        event.preventDefault();
        loadPage(href);
    };
});

async function loadPage(href){
    let response = await axios(href);
    const result = document.querySelector('.resultado');
    result.innerHTML = response.data;
}