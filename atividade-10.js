/*Você está desenvolvendo um sistema para verificação de compatibilidade de frutas
em um processo de preparo de sucos. O sistema precisa verificar se o tipo de fruta 
informado é compatível com o tipo esperado, de acordo com uma receita.

O suco pode ser feito somente com "laranja" ou "abacaxi".
Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro, informando que a fruta não é compatível.

Crie um programa que, dado o nome da fruta, verifique se ela é compatível com a receita
*/

const fruta = 'lArAnjA'
if (fruta.toLocaleLowerCase() === 'laranja' || fruta.toLocaleLowerCase() === 'abacaxi') {
    console.log('Compativel');
} else { console.log('Incompativel com a receita') }