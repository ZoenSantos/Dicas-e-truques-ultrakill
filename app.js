/**
 * Função para realizar a pesquisa de dicas e truques baseada na entrada do usuário.
 */
function pesquisar() {
    // Obtenção do elemento HTML para exibir os resultados e o valor da pesquisa.
    let session = document.getElementById("resultados-pesquisa");
    let pesquisaSite = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio.
    if (!pesquisaSite) {
        session.innerHTML = "<p>Nada foi pesquisado</p>";
        return;
    }

    let resultados = "";

    // Itera sobre o array de dados para encontrar correspondências com a pesquisa.
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se a pesquisa corresponde ao título, descrição ou tags do item.
        if (titulo.includes(pesquisaSite) || descricao.includes(pesquisaSite) || tags.includes(pesquisaSite)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.linkJogo}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <h2>${dado.anteslink}<a href="${dado.link}" target="_blank">${dado.direcionar}</a></h2>
                </div>
            `;
        }
    }

    // Verifica se não foram encontrados resultados.
    if (!resultados) {
        resultados = "<p>Nada foi encontrado com essa pesquisa.</p>";
    }

    // Insere os resultados no HTML.
    session.innerHTML = resultados;
}
