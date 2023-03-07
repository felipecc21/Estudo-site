// função para atualizar as posições dos itens
function atualizarPosicoes() {
    //Definição das posições das conchas
    const conchas = document.querySelectorAll('.concha');
    conchas.forEach(concha => {
        const left = Math.floor(Math.random() * 80) + 10; // número aleatório entre 10 e 90
        const top = Math.floor(Math.random() * 80) + 10; // número aleatório entre 10 e 90
        concha.style.left = `${left}%`;
        concha.style.top = `${top}%`;
    });

    //Definição das posições das pedras
    const pedras = document.querySelectorAll('.pedra');
    pedras.forEach(pedra => {
        const left = Math.floor(Math.random() * 80) + 10; // número aleatório entre 10 e 90
        const top = Math.floor(Math.random() * 80) + 10; // número aleatório entre 10 e 90
        pedra.style.left = `${left}%`;
        pedra.style.top = `${top}%`;
    });

    //Definição das posições dos corais
    const corais = document.querySelectorAll('.coral');
    corais.forEach(coral => {
        const left = Math.floor(Math.random() * 80) + 10; // número aleatório entre 10 e 90
        const top = Math.floor(Math.random() * 80) + 10; // número aleatório entre 10 e 90
        coral.style.left = `${left}%`;
        coral.style.top = `${top}%`;
    });
}

// função para exibir o X
function exibirImagem() {
    let objc = document.getElementById("c1");
    let objx = document.getElementById("x1");
    let objy = document.getElementById("y1");
    let imgSrc = './img/X.png'; //  imagem do X
    let imgHtml = `<img src="${imgSrc}" alt="imagem" width="100" height="100">`;
    
    objc.style.left = `${objx.value}px`;
    objc.style.top = `${objy.value}px`;
    objc.innerHTML = imgHtml;
}




