const vida = 15;
const morto = vida < 1 ? "morto!" : "vivo!";

const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(morto,corPadrao);