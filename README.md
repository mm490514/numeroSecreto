# Jogo de Adivinhação do Número Secreto

Este é um simples jogo de adivinhação de número secreto, onde o jogador deve tentar adivinhar um número gerado aleatoriamente pelo computador. O jogador utiliza comandos de voz para inserir seus palpites e recebe dicas se o número secreto é maior ou menor que seu palpite.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Funcionalidades

- Geração aleatória de um número secreto.
- Reconhecimento de voz para capturar palpites do jogador.
- Verificação dos palpites e feedback em tempo real.
- Interface de usuário simples e interativa.
- Opção de reiniciar o jogo após a vitória ou ao dizer "GAME OVER".

## Como Jogar

1. **Abrir o Jogo**: Abra o arquivo `index.html` em um navegador que suporte reconhecimento de voz (como Google Chrome).
2. **Diga seu Palpite**: Use o microfone para dizer um número entre o valor mínimo e máximo (1 a 100 por padrão).
3. **Receba Feedback**: O jogo informará se o número secreto é maior ou menor que seu palpite.
4. **Acerte o Número**: Continue jogando até acertar o número secreto.
5. **Reinicie o Jogo**: Após acertar o número ou dizer "GAME OVER", clique no botão "Jogar Novamente" para reiniciar o jogo.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd nome-do-repositorio
    ```
3. Abra o arquivo `index.html` em um navegador.

## Estrutura do Projeto

```plaintext
|-- index.html
|-- style.css
|-- app/
    |-- sortearNumero.js
    |-- reconhecimentoDeVoz.js
    |-- validacao.js
```

## Arquivos Principais

- **index.html**: Contém a estrutura HTML da página.
- **style.css**: Contém os estilos CSS para a página.
- **app/sortearNumero.js**: Contém a lógica para gerar o número secreto.
- **app/reconhecimentoDeVoz.js**: Contém a lógica para o reconhecimento de voz.
- **app/validacao.js**: Contém a lógica para validar os palpites do jogador.
