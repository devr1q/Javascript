//alert("olá");

function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('alt-imagem');
    var data = new Date();
    // var hora = data.getHours();
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.jpg'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.jpg'
    } else {
        //boa noite
        img.src = 'fotonoite.jpg'
    }
}