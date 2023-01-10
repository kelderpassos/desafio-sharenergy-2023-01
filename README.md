# Desafio para o processo seletivo SHARENERGY 2023/01

## Fork desenvolvido por: [@kelderpassos](https://github.com/kelderpassos)

<br>

# A aplicação:

A aplicação foi elaborada conforme as especificações passadas pelo README original. Dessa forma, temos o front-end e back-end com as seguintes configurações:

### Front-end

- React + Typescript
- Tailwind CSS
- Vite

### Back-end

- Node + Typescript
- MongoDB
- Mongoose

Além disso, foram desenvolvidos outros quesitos extras como:

- Testes unitários no back-end (cobertura > 90%)
- Dockerização completa da aplicação
- Estilização de código com ESlint

# Desafios:
- Desenvolver todo o back-end em POO aplicando conceitos SOLID
- Desenvolver testes unitários com cobertura superior à 90%
- Criar componentes reutilizáveis no front-end

# Instalação
Para instalar a aplicação é necessário utilizar o Docker. Para instalá-lo em sua máquina, você consegue instruções neste [endereço](https://www.docker.com/get-started/).

Uma vez o Docker instalado, realize o clone do projeto através do seguinte comando em um terminal
```
git@github.com:kelderpassos/desafio-sharenergy-2023-01.git
```
 Acesse a pasta `sharenergy-challenge` e rode o comando
```
npm run compose:up
```
Isto irá executar o docker-compose e instalar os containers; este processo deve demorar alguns minutos. Uma vez finalizado, acesse a aplicação pela endereço http://localhost:3000/ e a utilize.

Como a aplicação está no estágio de desenvolvimento, configurei para que o banco de dados já comece povoado e seja resetado sempre que ela for reiniciada, então na página Users vocês verão alguns usuários já cadastrados.

# Desinstalação
Para remover os containers e o banco de dados rode:
```
npm run compose:down
```

