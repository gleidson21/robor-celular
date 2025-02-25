
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
let contador = 0
    const carrinho = document.querySelector(".meu")

button1.addEventListener("click",()=>{
    contador++
    carrinho.innerHTML=contador
    })
    button2.addEventListener("click",()=>{
        contador2++
        carrinho.innerHTML=contador
    })

    