function verificaValorValido(chute){
    const numero = + chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }

    if (rangeNumero(numero)){
         elementoChute.innerHTML += `<div>Valor inválido:  o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }
    
    if (numero === numeroSecreto){
        
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}!</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></div>`
    }

}

function numeroInvalido(numero){
    return Number.isNaN(numero)
}

function rangeNumero(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
