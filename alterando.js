function alterandoTexto(){
    //um elemento
    let titulo = document.getAnimations.ElementById('titulo')
    titulo.innerHTML = 'O texto do paragrafo foi alterado pelo JavaScript!'

    //mais de um elemento
    //HTMLCollection - é uma lista dinamica
    let paragrafo = document.getElementById('paragrafo')

    for (const element of paragrafo) {
        element.innerHTML = 'texto alterao pelo JS'
    }

function alterarEstilo(){
    let titulo = document.getElementById('tiutlo')

    titulo.style.color = 'red'
    titulo.style.border = '1px  solif black'
    titulo.style.padding = '10px'

    //mais de um elemento
    let paragrafo = document.getElementByIdClassName('paragrafo')

    for (const element of paragrafo){
        element.style.color = ' green'
        element.style.border = ' 1px solid red'
        element.style.padding = ' 10px'
        element.classList.add('formatolegal')
        
    }
}
}