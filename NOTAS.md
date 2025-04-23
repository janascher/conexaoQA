<div align="center"> <h1> Notas </h1> </div>

## 🧐 Descrição

Este arquivo contém notas sobre as modificações realizadas e os aprendizados adquiridos durante as aulas do curso "Formação em Teste de Software" da [Iterasys](https://iterasys.com.br/pt), ministrado pelo professor José Correia. O projeto original é o ConexãoQA, que foi forkado para prática.

## 📚 Aprendizados

Durante as aulas, foram abordados os seguintes tópicos:

### 1- Configuração Local do Projeto

Configurar localmente o projeto ConexãoQA para prática de automação de testes.

#### Passos Realizados

- Clonagem do repositório ConexãoQA e realização do fork para o seu GitHub.

- Instalação das dependências necessárias para o back-end (`npm install` na raiz do projeto) e front-end (`npm install --legacy-peer-deps` na pasta `client`).

- Ajustes no Mongoose, onde foi removido as opções `useCreateIndex` e `useFindAndModify` do arquivo `.config/db.js` para compatibilidade com a versão atual do Mongoose.

- Configuração de variáveis de ambiente, para isso foi criado um arquivo `dev.js` na pasta `config` com as variáveis de ambiente necessárias.

- Iniciando a aplicação localmente com `npm run dev`.

#### Resultados

A aplicação rodou localmente nos endereços:

- Front-end: http://localhost:3000/

- Back-end: http://localhost:5000/

- Documentação API: http://localhost:5000/api-docs/

### 2- Automação de Testes com Cypress
Aprender a criar testes automatizados usando Cypress, comparando a abordagem clássica de testes Web com a nova abordagem de App Actions.

#### Passos Realizados
- Instalação do Cypress
- Configuração do `cypress.config.js` definindo a URL base da aplicação (http://localhost:3000).
- Criação de comando customizado (`createUser`) em `commands.js` que gera dados de usuário dinâmicos usando a biblioteca faker. Esse comando gera nome, email e senha aleatórios para cada teste, garantindo dados únicos e isolados.
- Nos testes de cadastro e login, utilizou o comando createUser para gerar um usuário novo a cada execução.
- Uso de App Actions para disparar diretamente as ações do Redux da aplicação, como register, login e createProfile, manipulando o estado interno sem precisar interagir com o DOM para esses processos.
- Validação do sucesso do cadastro e login verificando elementos visuais na interface, como mensagens de boas-vindas e redirecionamentos.
- Implementação de limpeza pós-teste (`afterEach`) para garantir que o perfil criado seja deletado, mantendo o ambiente limpo para os próximos testes.
- **Importante:** Para executar os testes, é necessário que o servidor da aplicação esteja rodando localmente (comando npm run dev na raiz do projeto), garantindo que a aplicação esteja disponível em http://localhost:3000.

## 🚧 Desafios Enfrentados
- Por se tratar de um projeto mais antigo, enfrentei dificuldades de compatibilidade com algumas ferramentas, como Cypress, Faker e Mongoose. Em vários momentos foi necessário utilizar a flag `--legacy-peer-deps` para instalar dependências corretamente. Durante a aula gravada, o professor não teve essas dificuldades, o que indica diferenças de ambiente e versões.

- A exclusão da conta criada durante os testes se mostrou um desafio. Enquanto o professor implementou a limpeza pós-teste (`afterEach`) para remover o perfil criado, eu não consegui excluir a conta devido a um popup de confirmação que não consegui inspecionar para capturar o seletor do botão “OK”. Isso fez com que o Cypress tentasse cadastrar repetidamente o mesmo usuário, gerando falhas. Como alternativa, utilizei o Faker para garantir que cada teste criasse um usuário diferente, evitando conflitos.

- A falta de mensagens claras de erro nas respostas das APIs dificultou a identificação dos problemas. Por exemplo, o endpoint `/api/users` retornava status 400 sem exibir mensagem de erro, o que demandou mais tempo para investigação e entendimento da causa.

## 💡 Aprendizados Finais
- Apesar da rapidez e estabilidade, a abordagem não simula interações reais do usuário (cliques e digitação), por isso é importante validar elementos visuais para garantir a experiência do usuário.
- A importância de ambientes atualizados e documentação clara das APIs para facilitar a automação e depuração dos testes.
- App Actions no Cypress permitem manipular diretamente o estado da aplicação, tornando os testes mais rápidos e estáveis quando se trata de aplicações SPA (Single Page Aplication).
- A necessidade do uso de comandos customizados e hooks (`beforeEach`, `afterEach`) para garantir dados isolados e ambiente limpo em cada execução de teste.

