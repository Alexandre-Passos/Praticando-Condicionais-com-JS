/*Regras para verificar se um ano é Bissexto
deve ser divisivel por 4 mas Não divisivel por 100
OU divisivel por 100 e por 400
*/

const anoBissexto = Number(2004)

if ((anoBissexto % 4 === 0) && (anoBissexto % 100 !== 0)) {
    console.log('É ano Bissexto')
} else if ((anoBissexto % 100 === 0) && (anoBissexto % 400 === 0)) {
    console.log('É bissexto')
} else {
    console.log('Não é bissexto')
}