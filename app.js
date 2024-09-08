function pesquisar() {

    let section = document.getElementById
    ("resultados-pesquisa")

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    //se o usuario não digitar nada e clicar no botão, 
    //o restante do código não é efetuado 
    //if(campoPesquisa == "") 
    if(!campoPesquisa) {
        section.innerHTML = "<p>nenhum resultado foi encontrado. Você não buscou por um jogo</p>"
        return
    };

    campoPesquisa = campoPesquisa .toLowerCase()
    
    //demonstração da pesquisa no console
    console.log(campoPesquisa)
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";
    //para cada dado dentro da lista de dados
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
         //se titulo incluir pesquisa
        //então faça...
        if (titulo.includes(campoPesquisa) || 
           descricao.includes(campoPesquisa) || 
           tags.includes(campoPesquisa)){

            //criando um novo elemento
            resultados += `
                    <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                    </div>
                    `
        }
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado<p>"
    }

//para cada dado dentro da lista de dados

    section.innerHTML = resultados

}
