const div = document.querySelector('#divP');
const paragrafo = div.querySelectorAll('p');
const estiloBody = getComputedStyle(document.body);
const bodyBackgroundColor = estiloBody.backgroundColor;

for (let p of paragrafo){
    p.style.background = bodyBackgroundColor;
    p.style.color = 'white';
}