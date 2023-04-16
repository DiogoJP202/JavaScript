document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase(); //capture html tag name.
    if(tag === 'a'){
        event.preventDefault(); // Prevent the event.
        loadPage(element);
    }
});

async function loadPage(element){
    try{
        const href =  element.getAttribute('href');
        const response = await fetch(href);
        if(response.status >= 200 || response.status <= 399){
            const html = await response.text();
            loadResult(html);
        } else {
            throw new Error(`ERROR ${response.status}`);
        }
    } catch(error){
        console.log(error);
    };
}

function loadResult(response){
    const result = document.querySelector('.result');
    result.innerHTML = response;
}

fetch('page01.html') //URL or the file path
    .then(response => {
        if(response.status !== 200) throw new Error('ERROR 404!'); // Whenever we throw an error, it sends it to catch.
        return response.text(); // convert the data to text and send it to the next then;
    })
    .then(html => console.log(html))
    .catch(error => console.error(error)); 