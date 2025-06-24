/*
Você está criando um sistema para um jogo, onde o personagem tem que passar 
por duas condições para conseguir avançar para o próximo nível:

O personagem precisa ter mais de 50 pontos.
O personagem deve ter pelo menos uma vida restante.
Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.
*/

const personagemPontos = 50
const personagemVida = 3
if (personagemPontos > 50 && personagemVida > 0) {
    console.log('Personagem subiu de nível');
} else {
    console.log('Atenda os requisisto para subir de nível');
}