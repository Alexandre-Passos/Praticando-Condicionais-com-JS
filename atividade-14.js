/*Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo 
com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:

"Crítica": se a bateria estiver abaixo de 20%
"Moderada": se estiver entre 20% e 80%
"Cheia": se estiver acima de 80%
Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.
*/

const statusBateria = 20

console.log(statusBateria > 80 ? 'cheia' : statusBateria < 20 ? 'Crítica' : 'Moderada')