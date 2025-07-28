function horas() {
    var mensagem = window.document.getElementById("horario");
    var foto = window.document.getElementById("imagem");
    var fundo = window.document.body

    var data = new Date();
    var horas = data.getHours()

    mensagem.innerHTML = `Agora são ${horas} horas!`

    horas = 19

    if (horas >= 0 && horas < 12) {
        foto.src = "./imagens/manha.jpg"
        fundo.style.backgroundColor = "#FFA500"
    } else if (horas >= 12 && horas < 18) {
        foto.src = "./imagens/tarde.jpg"
        fundo.style.backgroundColor = "#FF4500"
    } else { foto.src = "./imagens/noite.jpg" 
         fundo.style.background = "url('./imagens/noite.jpg') center/cover no-repeat fixed";
;

    }
}

