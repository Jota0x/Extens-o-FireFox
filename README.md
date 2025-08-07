# Extensão Agrupador de Abas

## Sobre
Esta é uma extensão simples para o navegador Firefox que permite agrupar todas as abas abertas em uma única janela, organizando sua área de trabalho e facilitando a navegação.

## Funcionalidades
* Agrupa todas as abas da janela ativa com um único clique.
* Interface simples e intuitiva.

## Tecnologias Utilizadas
* **HTML:** Estrutura da interface do usuário (o popup).
* **CSS:** Estilização da interface, tornando-a visualmente agradável.
* **JavaScript:** Lógica principal para interagir com a API do navegador e agrupar as abas.
* **WebExtensions API:** A interface do navegador para manipular abas, janelas e outras funcionalidades.

## Como Instalar e Testar

1.  Abra o navegador Firefox.
2.  Na barra de endereço, digite `about:debugging` e pressione Enter.
3.  No menu à esquerda, clique em "This Firefox".
4.  Clique no botão "Carregar Extensão Temporária..." ("Load Temporary Add-on...").
5.  Navegue até a pasta do projeto (onde está o arquivo `manifest.json`) e selecione qualquer arquivo dentro dela para carregar a extensão.

A extensão agora estará visível como um ícone na barra de ferramentas do seu navegador.

## Como Usar
1.  Abra várias abas no navegador.
2.  Clique no ícone da extensão na barra de ferramentas.
3.  Na janela que aparecer, clique no botão "Agrupar Abas".
4.  Todas as abas da janela atual serão agrupadas.
