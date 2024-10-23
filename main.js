function adicionarTarefa(){
    let li = document.createElement("li")
    let input = document.formPrincipal.tarefas.value
    let input_texto = document.createTextNode(input)

    li.appendChild(input_texto)

    document.querySelector('ul').appendChild(li)
    document.formPrincipal.tarefas.value = ""

    criarBotaoFechar(li)
}

function criarBotaoFechar(li){
    let rotulo = document.createElement("SPAN")
    let fechar = document.createTextNode("\u00D7")
    
    rotulo.className = "close"
    rotulo.appendChild(fechar)
    li.appendChild(rotulo)
    
    rotulo.onclick = () =>{
        rotulo.parentElement.style.display = "none"
    }

    }

    document.querySelectorAll('li').forEach(criarBotaoFechar)
    document.querySelector('ul').addEventListener('click', (e) =>{
        if(e.target.tagName === "LI")
        e.target.classList.toggle('checked')
    })