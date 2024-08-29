const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const botaoCopiar = document.querySelector('.btn-Copiar');
botaoCopiar.style.display = 'none';

function mensagemNaoEncontrada(alerta) {
    mensagem.value = '';
    mensagem.placeholder = "Nenhuma mensagem encontrada.";
    mensagem.style.backgroundImage = "url(imagens/Boneco.png)";
    botaoCopiar.style.display = 'none';
    alert(`Digite um texto a ser ${alerta}.`);
}
function retiraAvisoDeMensagemNaoEncontrada() {
    textArea.value = "";
    mensagem.style.backgroundImage = 'none';
    mensagem.placeholder = ''; // Remove o placeholder ao criptografar ou descriptografar
    botaoCopiar.style.display = 'block'; // Faz o botão de copiar aparecer
}
function btnEncriptar() {
    if (textArea.value.trim() == '') {
        mensagemNaoEncontrada('criptografado');
    } else {
        const textoEncriptado = encriptar(textArea.value);
        mensagem.value = textoEncriptado;
        retiraAvisoDeMensagemNaoEncontrada();
    }
}

function encriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringEncriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    if (textArea.value.trim() == '') {
        mensagemNaoEncontrada('descriptografado');
    } else {
        const textoDesencriptado = desencriptar(textArea.value);
        mensagem.value = textoDesencriptado;
        retiraAvisoDeMensagemNaoEncontrada();
    }
}

function desencriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let stringDesencriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    const mensagem = document.querySelector(".mensagem");

    navigator.clipboard.writeText(mensagem.value).then(() => {
        alert("Texto copiado para a área de transferência!");
        mensagem.value = '';
        mensagem.placeholder = "Nenhuma mensagem encontrada.";
        mensagem.style.backgroundImage = "url(imagens/Boneco.png)";
        botaoCopiar.style.display = 'none';
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
}
