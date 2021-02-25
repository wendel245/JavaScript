function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('[ERROR] Passo Inválido')
        }
        if (i < f){
            for (var c = i; c <= f ; c += p){
                res.innerHTML +=  ` ${c} &#x1F449`
            }
        }else {
            for (var c = i; c >= f ; c -= p){
                res.innerHTML +=  ` ${c} &#x1F449`
        }
        
        }  
        res.innerHTML += `&#x1F3C1`    
    }
}