# project-manager-api
Projeto final da disciplina de Arquitetura Node.js no curso de pós-graduação em Arquitetura de Software Distribuído - PUC Minas.


### Descrição

O projeto final da disciplina consiste em desenvolver um produto de **gerenciamento de tarefas** como
mostra o desenho arquitetural de alto nível acima. Este projeto será subdividido em etapas, sendo:

1. Setup do ambiente de desenvolvimento e modelagem inicial dos dados;
2. Integração com banco de dados MySql usando o padrão DTO, Repository e TypeORM;
3. Autenticação e autorização com OAuth;
4. GraphQL e Modelagem em microsserviços.

![alt text](image.png)

### Requisitos para a compilação do projeto:
- Instalação IDE visual studio:
    > https://code.visualstudio.com/download
- Instalação typescript:
    > npm install typescript ts-node nodemon @types/node @types/express --save-dev
- Instalação NestJs:
    > npm i -g @nestjs/cli
- ...  

### Instruções para a execução do projeto:
- Abrir a IDE do Visual Studio;
- Efetuar a instalação dos pacotes `npm install`;
- Abrir uma aba do terminal e executar o comando `npm run start:dev`;
- O projeto será inicializado em http://localhost:3000

### Entregas:

_Entrega 01:_
- Criação do projeto;
- Criação dos modulos de **projects**, **tasks** e **users**.
