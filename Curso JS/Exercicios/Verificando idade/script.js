function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.vlaue > ano) {
        window.alert('[ERRO} Verifique is dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criançaM.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoM.PNG')
            }else {
                img.setAttribute('src', 'imagens/idosoM.PNG')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/criançaF.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoF.png')
            }else {
                img.setAttribute('src', 'imagens/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}