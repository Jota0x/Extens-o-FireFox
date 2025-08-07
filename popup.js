document.addEventListener('DOMContentLoaded', () => {

    //encontra o botão 
    const botaoAgruparAbas = document.getElementById('botaoAgruparAbas');

    //executa ação ao ser clicado (function agruparAbas)
    botaoAgruparAbas.addEventListener('click', () => {
        agruparAbas();
    });

});

//Função Principal do programa
function agruparAbas() {
    //API do navegador para obter abas e chegar abas abertas
    browser.tabs.query({ currentWindow: true }).then(tabs => {

        //mapeia lista de abas, cria array com ids
        const idAba = tabs.map(tab => tab.id)

        //usa API para agrupar as abas
        browser.tabs.group({
            tabIds: idAba
        });
        //fecha janela
        window.close();
    });
}
