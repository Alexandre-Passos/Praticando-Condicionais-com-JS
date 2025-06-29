/*
Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. 
Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.

Crie um programa que, dado o dia da semana em formato numérico:
0: Domingo
1: Segunda-feira
2: Terça-feira
3: Quarta-feira
4: Quinta-feira
5: Sexta-feira
6: Sábado
Verifique se a loja está aberta e qual o horário de funcionamento.

Se for sábado (6) ou domingo (0), a loja estará aberta em horário especial.
Nos outros dias, a loja estará aberta no horário normal.

*/

const diaDaSemana = 5

switch (diaDaSemana) {
    case 0:
        console.log('A loja está aberta em horário especial: 10h às 14h.');
        break;
    case 1:
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 2:
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 3:
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 4:
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 5:
        console.log('A loja está aberta no horário normal: 9h às 18h.');
        break;
    case 6:
        console.log('A loja está aberta em horário especial: 10h às 14h.');
        break;
    default:
        console.log('Fora da área de cobertura dos dias da semana.');
        break;
}