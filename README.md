![](https://ci6.googleusercontent.com/proxy/bjCBAJzYvMX4NZKakl0Q7DSKEYfJ-i3s6ZLmYNjCCKypX3EiWHhyGsAAPda_xL2FXToTe9SxPRWJ-83kYxbAaZVq7-CIyFCTaUPystNKB3chJIOR9crPh0yOnqF8UL3mQjpIX5dnCqv4kMuhuA24pYLDD2VlPDc=s0-d-e1-ft#https://s3.us-west-2.amazonaws.com/agenda-public/email-signature/logo-agendakids-to-edu-final.gif)

#### Bem-vindo à aplicação de teste

Estamos muito felizes que você tenha chegado nessa etapa do nosso processo seletivo, para essa fase, desejamos que você resolva um desafio.

O objetivo é melhorar esse código de desafio já existente de uma aplicação de envio de mensagens.

#### Requisitos
- Adicionar o React à camada de view do projeto;
  - Dica 1: [gem webpacker](https://github.com/rails/webpacker);
  - Dica 2: [gem react_on_rails](https://github.com/shakacode/react_on_rails) ou [gem react-rails](https://github.com/reactjs/react-rails)
- Aumentar cobertura de código;
- Organizar estrutura do projeto utilizando padrões de projetos;

#### Critérios de avaliação

- Organização do projeto: Avalia a estrutura do projeto, documentação e uso de controle de versão;
- Coerência: Avalia se os requisitos foram atendidos;
- Boas práticas: Avalia se o projeto segue boas práticas de desenvolvimento, incluindo segurança e otimização;
- Controle de Qualidade: Avalia se o projeto possui qualidade assegurada por testes automatizados(RSpec, Minitest, Jest, Mocha, Jasmine) e integração contínua (por exemplo Circle Ci).

#### Requisitos bônus

Esses requisitos não são obrigatórios, mas serão levados em consideração como pontos extras no momento da avaliação.

- Fazer ações sem precisar recarregar a página;
- Evitar N + 1 nas queries;
- Uma boa usabilidade e estética serão levadas em consideração;
- Atualização das gems;
- Integração contínua

#### Processo de submissão

O desafio deve ser entregue pelo GitHub. A aplicação deve estar hospedada no Heroku ou AWS. As URLs devem ser enviadas por email.

Qualquer dúvida em relação ao desafio, responderemos por e-mail.

Bom trabalho!


## Documentação
----

**Agenda Mail**
----

Aplicação para troca de mensagens entre usuários.

Possui usuario master, que pode visualizar todas as mensangens, inclusive arquivadas.

Usuario Master:

email: master@email.com

password: 123456

#### Setup

```
bundle install
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
```

Create `config/application.yml` with:

```
development:
  api_key: XXXX
```

**API**
----

`METHOD` | `URL` | `PARAMS`

* **URL**

  `/api/v1`

* **Required**

  `token=[string]` get your token in profile page

  It's a constant value for master token

* **Permission**


  `permission=master` If is a admin request

----

* **Messages**

    `GET` | `/messages`

    example: `curl '/api/v1/messages?token=XXX'`

* **Create Message**

  `POST` | `/messages` | `message[title]=string&message[content]=string`

  example: `curl -X POST '/api/v1/messages' -d 'message[receiver_email]=matheus@email.com&message[title]=APITEST&message[content]=CONTEUDO&token=XXX'`

* **Sent**

    `GET` | `/messages/sent`

    example: `curl '/api/v1/messages/sent?token=XXX'`

* **Archived**

  `GET` | `/messages/archived` | `permision=master`

  example: `curl '/api/v1/messages/archived?token=XXXX&permission=master'`

* **Show Message**

  `GET` | `/messages/:id`

  example: `curl '/api/v1/messages/1?token=XXX'`

  OR `curl '/api/v1/messages/1?token=XXX&permission=master'`

* **Archive Message**

  `PATCH` | `/messages/:id/archive`

  example: `curl -X PATCH '/api/v1/messages/1/archive?token=XXX'`

* **Archive Multiples**

  `GET` | `/messages/archive_multiple` | `message_ids[]`

  example: `curl -g -X PATCH '/api/v1/messages/archive_multiple?token=XXX&message_ids[]=1&message_ids[]=2'`

----

* **Users**

  `GET` | `/users` | `permision=master`

  example: `curl '/api/v1/users?token=XXX&permission=master'`

* **User Messages*

  `GET` | `/users/:id/messages` | `permision=master`

  `curl '/api/v1/users/1/messages?token=XXX&permission=master'`

* **Update Profile**

  `PATCH` | `/users/:id` | `user[name]=string&user[email]=string&user[password]=string&user[password_confirmation]=string`

  example: `curl -g -X PATCH '/api/v1/users/1?token=XXX&user[name]=Mateus'`

