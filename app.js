function pesquisar() {
    // Realiza uma pesquisa nos dados dos cafés com base no termo digitado pelo usuário.
    // Exibe os resultados encontrados na seção "resultados-pesquisa".
  
    // Obtém a seção HTML onde os resultados serão exibidos e o termo de pesquisa digitado pelo usuário.
    const section = document.getElementById("resultados-pesquisa");
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o usuário digitou algum termo de pesquisa.
    if (!termoPesquisa) {
      section.innerHTML = "<p>Você precisa digitar o nome do seu café. Tente buscar por Tradicional, Gourmet ou Especial.</p>";
      return; // Interrompe a função se nenhum termo for digitado
    }
  
    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
  
    // Itera sobre cada café na base de dados.
    for (const dado of dados) {
      // Converte os dados do café para minúsculas para facilitar a comparação com o termo de pesquisa.
      const titulo = dado.titulo.toLowerCase();
      const descricao = dado.descricao.toLowerCase();
      const tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no título, descrição ou tags do café.
      if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa) || tags.includes(termoPesquisa)) {
        // Constrói o HTML para exibir o café nos resultados da pesquisa.
        // **Observação:** O link para o Instagram está fixo neste exemplo.
        // Para links dinâmicos, ajuste o valor de `href` conforme necessário.
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="https://www.instagram.com/cafemanduca/" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados.
    if (!resultados) {
      resultados = "<p>Poxa, não encontramos seu café. Tente buscar por Tradicional, Gourmet ou Especial.</p>";
    }
  
    // Exibe os resultados na seção HTML.
    section.innerHTML = resultados;
  }