//Operador Ternário
const nome = 'Alexandre' || 'Anonimo'
const saudao = nome ? `Olá, ${nome}` : 'Olá, pessoa'
console.log(saudao)

//Switch case

const avaliacao = 2
switch (avaliacao) {
    case 1: 
    console.log('Nota horrivel')
    break
    case 2: 
    console.log('Nota 2')
    break
    case 3: 
    console.log('Media')
    break
    case 4: 
    console.log('Nota boa')
    break
    case 5: 
    console.log('Máxima')
    break
    default: 
    console.log('Fora da regua de medida')
    break
}

