const mainRef = document.getElementById("main")
const inputEmpresaRef = document.getElementById("inputEmpresa")
const inputNomeRef = document.getElementById("inputNome")
const inputCargoRef = document.getElementById("inputCargo")
const inputTelefoneRef = document.getElementById("inputTelefone")
const inputWhatsappRef = document.getElementById("inputWhatsapp")
const inputEmailRef = document.getElementById("inputEmail")
const inputEnderecoRef = document.getElementById("inputEndereco")
const inputImagemRef = document.getElementById("inputImagem")
const divCardRef = document.getElementById("divCard")
const btnLimparRef = document.getElementById("btnLimpar")


function limpaFormulario() {
    inputEmpresaRef.value = null
    inputNomeRef.value = null
    inputCargoRef.value = null
    inputTelefoneRef.value = null
    inputWhatsappRef.value = null
    inputEmailRef.value = null
    inputEnderecoRef.value = null
    inputImagemRef.value = null
}

mainRef.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let dadosFormulario; {
    dadosFormulario = `
    <div class="card">
    <div class="card-new">
    <p class="card-empresa">${inputEmpresaRef.value}</p>
    <img class="card-imagem" src="${inputImagemRef.value}" alt="Logomarca"/>
    <p class="card-nome">${inputNomeRef.value}</p>
    <p class="card-cargo">${inputCargoRef.value}</p>
    <p class="card-zap">${inputWhatsappRef.value}</p>
    <p class="card-email">${inputEmailRef.value}</p>
    <p class="card-tel">${inputTelefoneRef.value}</p>
    <p class="card-end">${inputEnderecoRef.value}</p>
    </div>
    </div>
    `;
  }
  divCardRef.innerHTML += dadosFormulario;
  limpaFormulario();
})

btnLimparRef.addEventListener("click", () => {
    divCardRef.innerHTML = "";
})

