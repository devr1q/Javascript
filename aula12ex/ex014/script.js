//alert("olá");

function carregar() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('alt-imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
}

