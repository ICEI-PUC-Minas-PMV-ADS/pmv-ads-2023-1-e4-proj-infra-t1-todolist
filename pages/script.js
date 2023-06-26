/*Todas as funções relacionadas ao firebase*/
function cadastrarUsuario() {

  const nome = document.getElementById('nome-cadastro').value;
  const email = document.getElementById('email-cadastro').value;
  const nascimento = document.getElementById('nascimento-cadastro').value;
  const senha = document.getElementById('senha-cadastro').value;
  const confirmaSenha = document.getElementById('confirmaSenha_cadastro').value;

  if (senha === confirmaSenha && senha !== null) {
    if (validaSenha(senha)) {
      if (validaEmail(email)) {
        if (validaNascimento(nascimento)) {
          registraUsuarioFirebase(email, senha);
        } else {
          alert("verifique a data de nascimento")
          //alerta formato data de nascimento
        }
      } else {
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

function logarSistema() {
  const email = document.getElementById('email-login').value;
  const senha = document.getElementById('senha-login').value;
  if (email !== '' && senha !== '') {
    if (validaEmail(email)) {
      loginWithEmailAndPassword(email, senha)
        .then((user) => {
          const auth = firebase.auth();
          const userLogado = auth.currentUser;
          userLogado.getIdToken()
            .then((token) => {
              setCookie("jwtToken", token, 1);
              window.location.href = "/main.html";
            })
            .catch((error) => {
              console.log(error)
            });
        })
        .catch((error) => {
          alert("Ocorreu um erro ao fazer o login! - " + error);
        })

    } else {
      alert('Formato de email inválido!')
    }
  } else {
    alert("Preencha os campos email e senha!")
  }
}

function deslogarSistema() {
  firebase.auth().signOut()
    .then(() => {
      deleteCookie("jwtToken");
      window.location.href = '/index.html'
    })
    .catch((error) => {
      console.log(error);
    })
}
//Funções de validação dos campos
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

function registraUsuarioFirebase(email, senha) {
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((response) => {
      alert('Usuário cadastrado com sucesso');
      window.location.href = "/index.html"
      return true;
    })
    .catch((error) => {
      console.log(error);
      alert("Ocorreu um erro durante o cadastro.");
      return false;
    })
}

function loginWithEmailAndPassword(email, senha) {
  return firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      setCookie('userLogado', user.uid, 2)

      return user;
    })
    .catch((erro) => {
      const erroCodigo = erro.code;
      const erroMensagem = erro.message;
      alert("Código do erro:", erroCodigo, erroMensagem);
      throw erro;
    })
}

function setCookie(nome, valor, horas) {
  const expira = new Date();
  expira.setTime(expira.getTime() + (horas * 60 * 60 * 1000));
  const cookie = `${nome}=${encodeURIComponent(valor)};expires=${expira.toUTCString()};path=/`;
  document.cookie = cookie;
}

function getCookieValue(cookieName) {
  const cookies = document.cookie.split(';'); // Dividir a string de cookies em um array

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // Remover espaços em branco do início e do fim do cookie

    // Verificar se o cookie começa com o nome desejado
    if (cookie.startsWith(cookieName + '=')) {
      // Obter o valor do cookie
      const cookieValue = cookie.substring(cookieName.length + 1); // +1 para excluir o sinal de igual

      // Decodificar o valor do cookie (opcional)
      const decodedCookieValue = decodeURIComponent(cookieValue);

      return decodedCookieValue;
    }
  }

  // Retorna nulo caso o cookie não seja encontrado
  return null;
}


function deleteCookie(cookieName) {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
/*Funções responsáveis pelas requisições. */



async function getAll() {
  document.getElementById('title-add').value = "";
  document.getElementById('date-add').value = "";
  document.getElementById('hour-add').value = "";
  document.getElementById('title-edit').value = "";
  document.getElementById('date-edit').value = "";
  document.getElementById('hour-edit').value = "";
  document.getElementById('id-edit').value = "";

  const token = getCookieValue('jwtToken');
  const url = 'https://localhost:7000/v1/todos';
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  }

  await fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Erro na requisição' + response.status)
      }
    }).then((json) => {
      const preencher = document.getElementById('tarefas-column');
      preencher.innerHTML = '';
      for (i = 0; i < json.length; i++) {

        if (json[i].done) {
          preencher.innerHTML = preencher.innerHTML +
            `
            <div id="${json[i].id}" class="card-tarefa done">
                <div class="descricao">
                    <h3>${json[i].title}</h3>
                    <h4>${json[i].date}</h4>
                </div>
                <div class="controles">
                    <input type="hidden" id="id-Task" value=${json[i].id}>
                    <input type="hidden" id="done-Task" value=${json[i].done}>
                    <button class="btn-secundario" type="submit" onclick="showModalEdit('${json[i].id}','${json[i].title}','${json[i].date}')"><i
                            class="fas fa-edit"></i></button>
                    <button class="btn-secundario" type="submit" onclick="deleteTask(document.getElementById('id-Task').value)"><i
                            class="fas fa-trash-alt"></i></button>
                    <button class="btn-secundario btn-done" id="bt-1" type="submit" onclick="changeStatus('${json[i].id}','${json[i].done}')"><i
                            class="fas fa-check"></i></button>

                </div>
            </div>
                `
        } else {
          preencher.innerHTML = preencher.innerHTML +
            `
            <div id="${json[i].id}" class="card-tarefa undone">
                <div class="descricao">
                    <h3>${json[i].title}</h3>
                    <h4>${json[i].date}</h4>
                </div>
                <div class="controles">
                    <input type="hidden" id="id-Task" value=${json[i].id}>
                    <input type="hidden" id="done-Task" value=${json[i].done}>
                    <button class="btn-secundario" type="submit" onclick="showModalEdit('${json[i].id}','${json[i].title}','${json[i].date}')"><i
                            class="fas fa-edit"></i></button>
                    <button class="btn-secundario" type="submit" onclick="deleteTask(document.getElementById('id-Task').value)"><i
                            class="fas fa-trash-alt"></i></button>
                    <button class="btn-secundario btn-done" id="bt-1" type="submit" onclick="changeStatus('${json[i].id}','${json[i].done}')"><i
                            class="far fa-square"></i></button>

                </div>
            </div>
                `
        }


      }
    }).catch((error) => { console.log(error) })
}

function changeStatus(id, status) {
  if (status === 'true') {
    document.getElementById(id).classList.add('undone');
    document.getElementById(id).classList.remove('done');
    markAsUndone(id);

  }
  if (status === 'false') {
    document.getElementById(id).classList.add('done');
    document.getElementById(id).classList.remove('undone');
    markAsDone(id);

  }
}

async function addTask() {
  const dataCompleta = document.getElementById('date-add').value;
  const hora = document.getElementById('hour-add').value;
  const data = dataCompleta.split('T')[0];

  const url = 'https://localhost:7000/v1/todos/create'
  const requisicao = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getCookieValue('jwtToken')
    },
    body: JSON.stringify({
      "title": document.getElementById('title-add').value,
      "user": getCookieValue('userLogado'),
      "date": data + 'T' + hora
    })
  }
  await fetch(url, requisicao)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro na requisição' + response.status)
      }
    }).then(json => {
      alert('tarefa salva com sucesso');
      getAll();
      modalAdd.style.display = "none";

    }).catch(erro => {
      alert('Não foi possivel salvar a tarefa!')
    })

}

async function deleteTask(id) {
  const token = getCookieValue('jwtToken');
  const user = getCookieValue('userLogado');
  const url = 'https://localhost:7000/v1/todos/Delete';
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: id, user: user }),
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Erro ao enviar os dados. Status: ${response.status}`);
    } else {
      alert('Tarefa excluida com sucesso!')
      getAll();

    }
  } catch (error) {
    console.error('Erro ao enviar os dados:', error);
    throw error;
  }
}

async function editTask() {
  const token = getCookieValue('jwtToken');
  const user = getCookieValue('userLogado');
  objectTarefa =
  {
    "id": document.getElementById('id-edit').value,
    "title": document.getElementById('title-edit').value,
    "user": user,
    "date": document.getElementById('date-edit').value + 'T' + document.getElementById('hour-edit').value
  }


  const url = `https://localhost:7000/v1/todos/Update`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(objectTarefa),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Erro ao enviar os dados. Status: ${response.status}`);
    } else {
      alert('Tarefa alterada com sucesso!')
      getAll();
      modalEdit.style.display = "none";

    }
  } catch (error) {
    console.error('Erro ao enviar os dados:', error);
    throw error;
  }
}

async function markAsDone(id) {
  const token = getCookieValue('jwtToken');
  const user = getCookieValue('userLogado');
  const url = `https://localhost:7000/v1/todos/MarkAsDone`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: id, user: user }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Erro ao enviar os dados. Status: ${response.status}`);
    } else {
      getAll();

    }
  } catch (error) {
    console.error('Erro ao enviar os dados:', error);
    throw error;
  }
}

async function markAsUndone(id) {
  const token = getCookieValue('jwtToken');
  const user = getCookieValue('userLogado');
  const url = `https://localhost:7000/v1/todos/MarkAsUnDone`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: id, user: user }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Erro ao enviar os dados. Status: ${response.status}`);
    } else {
      getAll();

    }
  } catch (error) {
    console.error('Erro ao enviar os dados:', error);
    throw error;
  }
}

async function getTasksDone() {
  const token = getCookieValue('jwtToken');
  const url = 'https://localhost:7000/v1/todos/done';
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  }

  await fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Erro na requisição' + response.status)
      }
    }).then((json) => {
      const preencher = document.getElementById('tarefas-column');
      preencher.innerHTML = '';
      for (i = 0; i < json.length; i++) {

        if (json[i].done) {
          preencher.innerHTML = preencher.innerHTML +
            `
            <div id="${json[i].id}" class="card-tarefa done">
                <div class="descricao">
                    <h3>${json[i].title}</h3>
                    <h4>${json[i].date}</h4>
                </div>
                <div class="controles">
                    <input type="hidden" id="id-Task" value=${json[i].id}>
                    <input type="hidden" id="done-Task" value=${json[i].done}>
                    <button class="btn-secundario" type="submit" onclick="showModalEdit('${json[i].id}','${json[i].title}','${json[i].date}')"><i
                            class="fas fa-edit"></i></button>
                    <button class="btn-secundario" type="submit" onclick="deleteTask(document.getElementById('id-Task').value)"><i
                            class="fas fa-trash-alt"></i></button>
                    <button class="btn-secundario btn-done" id="bt-1" type="submit" onclick="changeStatus('${json[i].id}','${json[i].done}')"><i
                            class="fas fa-check"></i></button>

                </div>
            </div>
                `
        } else {
          preencher.innerHTML = preencher.innerHTML +
            `
            <div id="${json[i].id}" class="card-tarefa undone">
                <div class="descricao">
                    <h3>${json[i].title}</h3>
                    <h4>${json[i].date}</h4>
                </div>
                <div class="controles">
                    <input type="hidden" id="id-Task" value=${json[i].id}>
                    <input type="hidden" id="done-Task" value=${json[i].done}>
                    <button class="btn-secundario" type="submit" onclick="showModalEdit('${json[i].id}','${json[i].title}','${json[i].date}')"><i
                            class="fas fa-edit"></i></button>
                    <button class="btn-secundario" type="submit" onclick="deleteTask(document.getElementById('id-Task').value)"><i
                            class="fas fa-trash-alt"></i></button>
                    <button class="btn-secundario btn-done" id="bt-1" type="submit" onclick="changeStatus('${json[i].id}','${json[i].done}')"><i
                            class="fas fa-check"></i></button>

                </div>
            </div>
                `
        }


      }
    }).catch((error) => { console.log(error) })
}


async function getTasksUndone() {
  const token = getCookieValue('jwtToken');
  const url = 'https://localhost:7000/v1/todos/undone';
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  }

  await fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Erro na requisição' + response.status)
      }
    }).then((json) => {
      const preencher = document.getElementById('tarefas-column');
      preencher.innerHTML = '';
      for (i = 0; i < json.length; i++) {

        if (json[i].done) {
          preencher.innerHTML = preencher.innerHTML +
            `
            <div id="${json[i].id}" class="card-tarefa done">
                <div class="descricao">
                    <h3>${json[i].title}</h3>
                    <h4>${json[i].date}</h4>
                </div>
                <div class="controles">
                    <input type="hidden" id="id-Task" value=${json[i].id}>
                    <input type="hidden" id="done-Task" value=${json[i].done}>
                    <button class="btn-secundario" type="submit" onclick="showModalEdit('${json[i].id}','${json[i].title}','${json[i].date}')"><i
                            class="fas fa-edit"></i></button>
                    <button class="btn-secundario" type="submit" onclick="deleteTask(document.getElementById('id-Task').value)"><i
                            class="fas fa-trash-alt"></i></button>
                    <button class="btn-secundario btn-done" id="bt-1" type="submit" onclick="changeStatus('${json[i].id}','${json[i].done}')"><i
                            class="fas fa-check"></i></button>

                </div>
            </div>
                `
        } else {
          preencher.innerHTML = preencher.innerHTML +
            `
            <div id="${json[i].id}" class="card-tarefa undone">
                <div class="descricao">
                    <h3>${json[i].title}</h3>
                    <h4>${json[i].date}</h4>
                </div>
                <div class="controles">
                    <input type="hidden" id="id-Task" value=${json[i].id}>
                    <input type="hidden" id="done-Task" value=${json[i].done}>
                    <button class="btn-secundario" type="submit" onclick="showModalEdit('${json[i].id}','${json[i].title}','${json[i].date}')"><i
                            class="fas fa-edit"></i></button>
                    <button class="btn-secundario" type="submit" onclick="deleteTask(document.getElementById('id-Task').value)"><i
                            class="fas fa-trash-alt"></i></button>
                    <button class="btn-secundario btn-done" id="bt-1" type="submit" onclick="changeStatus('${json[i].id}','${json[i].done}')"><i
                            class="fas fa-check"></i></button>

                </div>
            </div>
                `
        }


      }
    }).catch((error) => { console.log(error) })
}


window.addEventListener('load', () => {
  if (window.location.href === "http://127.0.0.1:5500/main.html") {
    getAll();
  }
});


/*Funções e métodos utilizado para dinamica da pagina */
var modalEdit = document.getElementById("modalEdit");
var closeBtn = document.getElementsByClassName("close");
for (i = 0; i < closeBtn.length; i++) {

  closeBtn[i].onclick = function () {
    modalEdit.style.display = "none";
    modalAdd.style.display = "none";

  };
}
window.onclick = function (event) {
  if (event.target == modalEdit || event.target == modalAdd) {
    modalEdit.style.display = "none";
    modalAdd.style.display = "none";

  }
};
function showModalEdit(id, title, data) {
  modalEdit.style.display = "block";
  document.getElementById('id-edit').value = id;
  document.getElementById('title-edit').value = title;
  document.getElementById('date-edit').value = data.split('T')[0];
  document.getElementById('hour-edit').value = data.split('T')[1];
}
var modalAdd = document.getElementById("modalAdd");

// Função para exibir o modalAdd
function showModalAdd() {
  modalAdd.style.display = "block";
}



//Funções de requisição
/*









*/