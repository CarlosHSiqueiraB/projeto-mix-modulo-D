function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var idade = document.getElementById('idade');
    var res = document.getElementById('resul');

    if (idade.value.length == 0 || Number(idade.value) > ano) {
        alert("Erro: Dados inválidos!");
    } else {
        var sexo = document.getElementsByName('sex');
        var idadef = ano - Number(idade.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (sexo[0].checked) {
            genero = "Homem";
            if (idadef < 10) {
                img.setAttribute('src', 'imagens/menino.jpg');
            } else if (idadef < 18) {
                img.setAttribute('src', 'imagens/garoto.jpg');
            } else if (idadef < 50) {
                img.setAttribute('src', 'imagens/homem.jpg');
            } else if (idadef < 120) {
                img.setAttribute('src', 'imagens/idoso.jpg');
            } else {
                img.setAttribute('src', 'imagens/morto.jpg');
            }
        } else if (sexo[1].checked) {
            genero = "Mulher";
            if (idadef < 10) {
                img.setAttribute('src', 'imagens/menina.jpg');
            } else if (idadef < 18) {
                img.setAttribute('src', 'imagens/garota.jpg');
            } else if (idadef < 50) {
                img.setAttribute('src', 'imagens/mulher.jpg');
            } else if (idadef < 120) {
                img.setAttribute('src', 'imagens/idosa.jpg');
            } else {
                img.setAttribute('src', 'imagens/morto.jpg');
            }
        } else {
            alert("Erro: Marque seu gênero!");
            return;
        }

        res.innerHTML = `Detectamos ${genero} com ${idadef} anos.`;
        res.appendChild(img);
    }
}
