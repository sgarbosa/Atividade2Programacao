//Declaração de variáveis para execução do cadastro

let NomeCompleto = ("Pedro Henrique Correia Sgarbosa"); //Variável para o nome do Inscrito.
let DataAtual = new Date (2021, 11, 21); //Variável para dizer qual a data de hoje, descrito por ANO, MES, DIA.
let DataEvento = new Date (2021, 12, 08); //Variável para dizer a dat ado evento, desciro por ANO, MES, DIA.
let Idade = (25); //Variável para a idade do Inscrito.
let NumInscritos = (80); //Variável para a quantidade de inscritos nesse evento.

//Condicional para Verificar se a data do evento ainda não passou.
if (DataAtual < DataEvento) { //Verificando se a data do evento já possou ou não
    console.log ("Este evento ainda não ocorreu. O cadastro para ele ainda está permitido."); //Se ainda não passou, o cadastro está permitido.
} else {
    console.log ("Este evento já aconteceu. Cadastro inválido."); //Se a data já passou, o evento está indisponível. Logo, o cadastro não está permitido.
}

//Condicional para verificar a idade do Inscrito.
if (Idade < 18) { //Verificando se o inscrito é maior de 18 anos ou não.
    console.log ("Evento não permitido para menores de 18 anos. Cadastro Inválido."); //Se for menor de 18 anos, cadastro inválido,
} else {
    console.log ("Idade permitida para este evento. Cadastro Válido.") //Se for maior de 18 anos, cadastro válido.
}

//Condicional para verificar a quantidade de Inscritos.
if (NumInscritos < 100) { //A capacidade máxima do evento é de 100 inscritos.
    console.log ("Este evento ainda não alcançou sua capacidade máxima. Cadastro Válido."); //Se não passou de 100 inscritos, cadastro válido.
} else {
    console.log ("Este evento já alcançou sua capacidade máxima. Cadastro Inválido."); //Se já passou de 100 inscritos, cadastro inválido.
}
