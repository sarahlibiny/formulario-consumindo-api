async function consultarEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertido = await consultaCep.json();
            if(consultaCepConvertido.erro){
                throw Error ('O CEP não existe!');
            }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepConvertido.localidade;
        logradouro.value = consultaCepConvertido.logradouro;
        bairro.value = consultaCepConvertido.bairro;
        estado.value = consultaCepConvertido.uf;

        console.log(consultaCepConvertido);
        return consultaCepConvertido;
    }
    catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido</p>`;
        console.log(erro);
    }
    
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => {
    consultarEndereco(cep.value);
})

