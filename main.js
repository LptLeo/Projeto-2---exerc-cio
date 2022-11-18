const ListaContatos = []
const ListaNumeros = []

addEventListener('submit', function(e) {
    e.preventDefault()

    var inputContato = document.getElementById('input-contato')
    var inputNumero = document.getElementById('input-numero')
    
    if (ListaContatos.includes(inputContato.value)) {
        alert(`O Contato: ${inputContato.value} já está incluso na agenda!`)
        var add = ''
    } else if (ListaNumeros.includes(inputNumero.value)) {
        alert(`O Telefone: ${inputNumero.value} já está incluso na agenda!`)
        var add = ''
    } else {
        var add = document.getElementById('registrar').innerHTML += `<tr><td>${inputContato.value}</td><td>${inputNumero.value}</td></tr>`
        ListaContatos.push(inputContato.value)
        ListaNumeros.push(inputNumero.value)
    }
    
    console.log(ListaContatos)
    console.log(ListaNumeros)
})