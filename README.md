## Documentação

---

## **Agenda Mail**

Aplicação para troca de mensagens entre usuários.

Possui usuario master, que pode visualizar todas as mensangens, inclusive arquivadas.

Usuario Master:

email: master@email.com

password: 123456

#### Setup

```
bundle install
bundle exec figaro install
yarn install
```

Em `config/application.yml` sete suas configurações de banco e crie uma master key, como no exemplo a seguir:

```
development:
  DATABASE_HOST: localhost
  DATABASE_USERNAME: UsernamePostgres
  DATABASE_PASSWORD: "seuP4ssw0rd"
  api_key: 'suaApiKey'
```

importante criar uma configuração para cada environment ou poderão haver erros nos comandos a seguir

```
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
rails s
```
