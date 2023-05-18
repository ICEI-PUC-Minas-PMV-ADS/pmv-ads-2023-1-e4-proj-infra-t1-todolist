function cadastrarUsuario() {

    const nome = document.getElementById('nome-cadastro').value;
    const email = document.getElementById('email-cadastro').value;
    const nascimento = document.getElementById('nascimento-cadastro').value;
    const senha = document.getElementById('senha-cadastro').value;
    const confirmaSenha = document.getElementById('confirmaSenha_cadastro').value;

    if (senha === confirmaSenha && senha !== null) {
        if (validaSenha(senha)) {
            if(validaEmail(email)){
                if(validaNascimento(nascimento)){
                    registraUsuarioFirebase(email, senha);
                }else{
                    alert("verifique a data de nascimento")
                    //alerta formato data de nascimento
                }
            }else{
                //alerta formato email
                alert("verifique o email")
            }
        } else {
            alert('a senha não está no formato correto')
            /*A senha deve seguir o seguinte padrão:
            Possui pelo menos uma letra minúscula((?=.* [a - z]))
            Possui pelo menos uma letra maiúscula((?=.* [A - Z]))
            Possui pelo menos um dígito((?=.*\d))
            Possui pelo menos um caractere especial, como @, $, !, %, *, ? ou & ((?=.* [@$! %*?&]))
            Tem um comprimento mínimo de 8 caracteres({ 8, })*/   
        }
    } else {
        alert("as senhas não são iguais")
        //alerta do campo senha
    }

}

function logarSistema(){
    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;
    if(email !== '' && senha !==''){
        if(validaEmail(email)){
            loginWithEmailAndPassword(email,senha)
            .then((user)=>{
                const auth = firebase.auth();
                const userLogado = auth.currentUser;
                console.log(userLogado)
                userLogado.getIdToken()
                .then((token)=>{
                    console.log(token)
                    setCookie("jwtToken", token, 1);
                    window.location.href="/main.html";

                })
                .catch((error)=>{
                    console.log(error)
                });
            })
            .catch((error)=>{
                alert("Ocorreu um erro ao fazer o login!");
                console.log(error)
            })

        }else{
            alert('Formato de email inválido!')
        }
    }else{
        alert("Preencha os campos email e senha!")
    }
}

function validaEmail(texto) {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(texto);
}

function validaNascimento(texto) {
    const regex = /^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    return regex.test(texto);
}

function validaSenha(texto) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(texto);
}

function registraUsuarioFirebase(email, senha){
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((response) => {
            alert('Usuário cadastrado com sucesso');
            window.location.href= "/index.html"
            return true;
        })
        .catch((error) => {
            console.log(error);
            alert("Ocorreu um erro durante o cadastro.");
            return false;
        })
}

function loginWithEmailAndPassword(email,senha){
    return firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log("Usuário logado:", user.uid);
        return user;
    })
    .catch((erro)=>{
        const erroCodigo = erro.code;
        const erroMensagem = erro.message;
        console.log("Código do erro:", erroCodigo, erroMensagem);
        throw erro;
    })
}

function setCookie(nome, valor, horas){
    const expira = new Date();

    expira.setTime(expira.getTime()+ (horas * 60*60*1000 ));
    const cookie = `${nome}=${encodeURIComponent(valor)};expires=${expira.toUTCString()};path=/`;
    document.cookie=cookie;
}


var modal = document.getElementById("modalEdit");

// Encontra o elemento do botão de fechar
var closeBtn = document.getElementsByClassName("close")[0];

// Define um evento de clique no botão de fechar para ocultar o modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Define um evento de clique fora do modal para ocultá-lo
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Função para exibir o modal
function showModal() {
  modal.style.display = "block";
}