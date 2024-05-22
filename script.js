let sliderElement = document.querySelector('#slider')
let buttonelement = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let passWord = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')
let pass

let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#'
let novaSenha = ''

sizePassword.innerHTML = sliderElement.value // o sizerpassword é o span vazio para dizer o valor, esta dizendo que o valor do span é o valor do input]

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}


buttonelement.addEventListener('click',function generatePasswor(){

    let pass = ''
    // 'n = charset.length' guarda o tamanho da variavel charset no 'n', 'i < sliderElement.value' define uma condição para rodar o loop, vai rodar enquanto enquato o i for menor que sliderElemento 
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass+= charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide')
    passWord.innerHTML = pass
    novaSenha = pass
})

containerPassword.addEventListener('click', () => {
    alert("Senha copiada")
    navigator.clipboard.writeText(novaSenha)
})