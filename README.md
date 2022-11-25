# Conexão 

Projeto final do Curso de Análise e Desenvolvimento de Sistemas - Impacta

## Índice

* [Como utilizar](#como-utilizar-em-desenvolvimento)
* [Principais tecnologias](#principais-tecnologias)
* [Organização/Planejamento](#organização/planejamento)
* [Definição do produto](#definição-do-produto)
* [Requisitos do sistema](#requisitos-do-sistema)
   - [Priorizados](#priorizados)
   - [Roadmap](#roadmap)


## Como Utilizar em Desenvolvimento

  ### install no terminal
  ```` 
    yarn install
  ````
  ou
  ````
    npm install
   ````

  ### rodar o projeto localmente (fazê-lo junto com o [conexao-service](https://github.com/nayamarosa/conexao-service))
  ```` 
    yarn start
  ````
  ou
  ````
  npm start
  ````

### Principais Tecnologias

* React
* NodeJs
* PostgreSQL *à partir do dia 28/11 o funcionamento do heroku-postgresql pode ser comprometido dado a plataforma se tornar paga*
* Sequelize

## Organização/Planejamento

 * [GitHub Project](https://github.com/users/sirleyalmeida/projects/2);
 * Reuniões;
 * Pair Programming;

## Definição do produto

Conexão é uma aplicação web, voltado para Programa de mentoria de carreira/qualificação. Através de do cadastro dos usuários mentor e mentorado e match da suas respectivas áreas de atuação e interesse.
Nesse MVP é possível que os usuários realizem o cadastro, se loguem, que o match entre perfis ocorra, mentor crie feedback e mentorado visualize o feedback.

## Requisitos do sistema

### Entregues:
- SSS01 - o sistema DEVE permitir a criação de usuários "mentor"
- SSS02 - o sistema DEVE permitir a criação de usuários "mentorado"
- SSS03 - o sistema DEVE permitir que "mentor" e "mentorado" tenham um match a partir da área informada por ambos
- SSS06 - o sistema DEVE permitir usuário mentor visualizar seu perfil preenchido
- SSS07 - o sistema DEVE permitir usuário mentorado visualizar seu perfil preenchido
- SSS08 - o sistema DEVE permitir usuário mentor pode editar seus dados
- SSS09 - o sistema DEVE permitir usuário mentorado pode editar seus cadastro
- SSS12 - o sistema DEVE permitir usuários acessarem/logar na plataforma
- SSS13 - o sistema DEVE permitir o mentorado visualizar um feedback recebido
- SSS14 - o sistema DEVE permitir o mentor visualizar solicitações de feedback
- SSS15 - o sistema DEVE permitir o mentor gerar feedback

### Roadmap:
- SSS05 - o sistema DEVE permitir que mentorado visualize perfil do mentor de combinação
- SSS04 - o sistema DEVE permitir que mentor obtenha/visualize informações do "mentorado" de combinação
- SSS10 - o sistema DEVE permitir usuário mentor cancelar seus cadastro
- SSS11 - o sistema DEVE permitir usuário mentorado cancelar seus cadastro
- SSS16 - o sistema DEVE permitir o mentor editar feedback
- SSS17 - o sistema DEVE permitir o mentor excluir feedback