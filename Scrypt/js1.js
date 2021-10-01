function verificar() {
    var n = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if (n.value.length == 0) {
        window.alert(`[ERRO] Verifique se inseriu tudo adequadamente e tente novamente.`)
    } else {
        var tno = Number(n.value)
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${tno} x ${c} = ${tno*c}`
            tab.appendChild(item)
            c++
        }
    }
}