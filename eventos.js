
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes') //promise
.then(resposta => resposta.json()) 
.then(conteudo => {
    /* forma 1 - arrow function*/
    conteudo.map((valor) => {
    regiao.innerHTML += `<option value="${valor.id}">${valor.nome}</option>`
 });
});

function buscarEstados(){

    estado.innerHTML = '<option selected>-- Selecione --</option>'
       
 fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados`) //promise
.then(resposta => resposta.json()) 
.then(conteudo => {
    conteudo.map((valor) => {
    estado.innerHTML += `<option value="${valor.id}">${valor.nome}</option>`
 });
});

}

function buscarCidades() {


        cidade.innerHTML = '<option selected>-- Selecione --</option>'
        carregando.style.visibility ='visible';

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios`) //promise
    .then(resposta => resposta.json()) 
    .then(conteudo => {
        carregando.style.visibility ='hidden';
        conteudo.map((valor) => {
        cidade.innerHTML += `<option>${valor.nome}</option>`
     });

    });

}


//https://servicodados.ibge.gov.br/api/v1/localidades/regioes/{macrorregiao}/municipios

/* forma 1 - arrow function*/
// regioes.map(valor) => {
// regiao.innerHtml += `<options>${valor}</options>`
// });

/* forma 2 - function anonima*/
//regiao.map(function(valor) {
// regiao.innerHtml += `<options>${valor}</options>`   

/* forma 3 - function externa*/
// function addOption(valor) {
//   regiao.innerHTML += `<option>${valor.nome}</option>`;
// }

//regioes.map(addOption)

