gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application json'
        }
    }).then((response) => {
        return response.json()
    });
} 

atualizaImagens = () => {

    var imagens = document.querySelectorAll('.image')
    imagens.forEach( img => {

        pegarPersonagem().then((data) => {
            img.src = data.image
            img.title = data.name
        })
    })
}

atualizaImagens()
