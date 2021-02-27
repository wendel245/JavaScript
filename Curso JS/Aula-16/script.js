function parimp(n) {
    if(n%2==0){
        return'par'
    } else {
        return'impar'
    }
}
var res = parimp(12)
console.log(res)

function soma(n1=0,n2=0){
    return n1+n2
}

console.log(soma(2,))

var v = function(x) {
    return x*2
}
console.log(v(5))