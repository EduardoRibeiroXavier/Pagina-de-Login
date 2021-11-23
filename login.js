let btn = document.getElementById('fa-eye')
/* Declarando uma variável 'btn' para buscar o icone 'fa-eye'*/
btn.addEventListener('click' , function(){
    let inputSenha = document.getElementById ('senha')
/*Criando outra variável para buscar o input 'senha'*/
    if(inputSenha.getAttribute('type') == 'password'){  /* Criando uma função para que se o 'type' for igual a 'password'*/
        inputSenha.setAttribute('type', 'text')         /* Setar um atributo para mudar de 'type' para 'text', assim mostrando a senha que foi digitada*/
    } else {                                            /* Senão o 'type' volta a ser 'password' voltando a esconder a senha */
        inputSenha.setAttribute('type', 'password')
    }
})