/*
Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. 
Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

Menor que 15: "Frio"
De 15 a 25: "Agradável"
Acima de 25: "Quente"
*/

const temperaturaDoDia = 20

if (temperaturaDoDia < 15) {
    console.log(Frio);
}
else if (temperaturaDoDia >= 15 && temperaturaDoDia <= 25) {
    console.log('Agradável');
}else{
    console.log('Quente');
}