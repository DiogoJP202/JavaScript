let buttons = document.querySelectorAll("button");
let resp = document.querySelectorAll(".res");

const equipamentos = {
    teclado: 0,
    mouse: 0,
    desktop: 0,
    monitor: 0,
    caboFonteDesktop: 0,
    caboFonteMonitor: 0,
    caboHDMI: 0,
    caboVGA: 0,
    caboDisplayPort: 0,
    caboDeRede: 0
}

document.addEventListener("click", (event) => {
    let element = event.target;
    let p = document.querySelector('.info');

    if(element.classList.contains('Teclado')){
        p.innerHTML = "";
        console.log('Teclado');
        equipamentos.teclado += 1;
        resp[0].innerHTML = `Teclado: ${equipamentos.teclado}`;
    }

    if(element.classList.contains('Mouse')){
        p.innerHTML = "";
        console.log('Mouse');
        equipamentos.mouse += 1;
        resp[1].innerHTML = `Mouse: ${equipamentos.mouse}`;
    }

    if(element.classList.contains('Desktop')){
        p.innerHTML = "";
        console.log('Desktop');
        equipamentos.desktop += 1;
        resp[2].innerHTML = `Desktop: ${equipamentos.desktop}`;
    }

    if(element.classList.contains('Monitor')){
        p.innerHTML = "";
        console.log('Monitor');
        equipamentos.monitor += 1;
        resp[3].innerHTML = `Monitor: ${equipamentos.monitor}`;
    }

    if(element.classList.contains('CaboFonteDesktop')){
        p.innerHTML = "";
        console.log('CaboFonteDesktop');
        equipamentos.caboFonteDesktop += 1;
        resp[4].innerHTML = `Cabo Fonte(Desktop): ${equipamentos.caboFonteDesktop}`;
    }

    if(element.classList.contains('CaboFonteMonitor')){
        p.innerHTML = "";
        console.log('CaboFonteMonitor');
        equipamentos.caboFonteMonitor += 1;
        resp[5].innerHTML = `Cabo Fonte(Monitor): ${equipamentos.caboFonteMonitor}`;
    }

    if(element.classList.contains('CaboHDMI')){
        p.innerHTML = "";
        console.log('CaboHDMI');
        equipamentos.caboHDMI += 1;
        resp[6].innerHTML = `Cabo HDMI: ${equipamentos.caboHDMI}`;
    }

    if(element.classList.contains('CaboVGA')){
        p.innerHTML = "";
        console.log('CaboVGA');
        equipamentos.caboVGA += 1;
        resp[7].innerHTML = `Cabo VGA: ${equipamentos.caboVGA}`;
    }

    if(element.classList.contains('CaboDisplayPort')){
        p.innerHTML = "";
        console.log('CaboDisplayPort');
        equipamentos.caboDisplayPort += 1;
        resp[8].innerHTML = `Cabo DisplayPort: ${equipamentos.caboDisplayPort}`;
    }

    if(element.classList.contains('CaboDeRede')){
        p.innerHTML = "";
        console.log('CaboDeRede');
        equipamentos.caboDeRede += 1;
        resp[9].innerHTML = `Cabo de Rede: ${equipamentos.caboDeRede}`;
    }

    if(element.classList.contains('minus1')){
        p.innerHTML = "";
        console.log('Teclado');
        equipamentos.teclado -= 1;
        resp[0].innerHTML = `Teclado: ${equipamentos.teclado}`;
    }

    if(element.classList.contains('minus2')){
        p.innerHTML = "";
        console.log('Mouse');
        equipamentos.mouse -= 1;
        resp[1].innerHTML = `Mouse: ${equipamentos.mouse}`;
    }

    if(element.classList.contains('minus3')){
        p.innerHTML = "";
        console.log('Desktop');
        equipamentos.desktop -= 1;
        resp[2].innerHTML = `Desktop: ${equipamentos.desktop}`;
    }

    if(element.classList.contains('minus4')){
        p.innerHTML = "";
        console.log('Monitor');
        equipamentos.monitor -= 1;
        resp[3].innerHTML = `Monitor: ${equipamentos.monitor}`;
    }

    if(element.classList.contains('minus5')){
        p.innerHTML = "";
        console.log('CaboFonteDesktop');
        equipamentos.caboFonteDesktop -= 1;
        resp[4].innerHTML = `Cabo Fonte(Desktop): ${equipamentos.caboFonteDesktop}`;
    }

    if(element.classList.contains('minus6')){
        p.innerHTML = "";
        console.log('CaboFonteMonitor');
        equipamentos.caboFonteMonitor -= 1;
        resp[5].innerHTML = `Cabo Fonte(Monitor): ${equipamentos.caboFonteMonitor}`;
    }

    if(element.classList.contains('minus7')){
        p.innerHTML = "";
        console.log('CaboHDMI');
        equipamentos.caboHDMI -= 1;
        resp[6].innerHTML = `Cabo HDMI: ${equipamentos.caboHDMI}`;
    }

    if(element.classList.contains('minus8')){
        p.innerHTML = "";
        console.log('CaboVGA');
        equipamentos.caboVGA -= 1;
        resp[7].innerHTML = `Cabo VGA: ${equipamentos.caboVGA}`;
    }

    if(element.classList.contains('minus9')){
        p.innerHTML = "";
        console.log('CaboDisplayPort');
        equipamentos.caboDisplayPort -= 1;
        resp[8].innerHTML = `Cabo DisplayPort: ${equipamentos.caboDisplayPort}`;
    }

    if(element.classList.contains('minus10')){
        p.innerHTML = "";
        console.log('CaboDeRede');
        equipamentos.caboDeRede -= 1;
        resp[9].innerHTML = `Cabo de Rede: ${equipamentos.caboDeRede}`;
    }

    if(element.classList.contains('send')){
        p.innerHTML = `
        Teclado: ${equipamentos.teclado};<br>
        Mouse: ${equipamentos.mouse};<br>
        Desktop: ${equipamentos.desktop};<br>
        Monitor: ${equipamentos.monitor};<br>
        Cabo Fonte(Desktop): ${equipamentos.caboFonteDesktop};<br>
        Cabo Fonte(Monitor): ${equipamentos.caboFonteMonitor};<br>
        Cabo HDMI: ${equipamentos.caboHDMI};<br>
        Cabo VGA: ${equipamentos.caboVGA};<br>
        Cabo DisplayPort: ${equipamentos.caboDisplayPort};<br>
        Cabo de Rede: ${equipamentos.caboDeRede};<br>
        `
    }
})
