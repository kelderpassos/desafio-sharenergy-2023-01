# Desafio para o processo seletivo SHARENERGY 2023/01

## Fork desenvolvido por: [@kelderpassos](https://github.com/kelderpassos)

<br>

<details>
  <summary>:us: English Version</summary>

# The application:

It was developed following the specifications given by the original README. Therefore we have front-end and back-end with these setup:

### Front-end

- React + Typescript
- Tailwind CSS
- Vite

### Back-end

- Node + Typescript
- MongoDB
- Mongoose

Also some extra requeriments were also developed such as:
- Unit tests in the back-end (coverage > 90%)
- Complete dockerization of the application
- Code enforce styling with ESlint

# Challenges:
- Developing the whole back-end with OOP applying SOLID
- Developing unit tests to with coverage above 90%
- Create reusable components in the front-end

# Installation
To install the application it's necessary to use Docker. You can install it in your machine through this [link](https://www.docker.com/get-started/).

Once installed, clone the project with this command on a terminal

```
git@github.com:kelderpassos/desafio-sharenergy-2023-01.git
```
Enter the project's folder and run the following command:
```
npm run compose:up
```

This will execute docker-compose and install the containers. It may take a while. When it's finished, access the application via this address http://localhost:3000/ and use it.

As the application is on development state, I configured it in a way that the database starts populated and be reset everytime it's restarted, so on page Users you're gonna see some users already implemented.

Como a aplicação está no estágio de desenvolvimento, configurei para que o banco de dados já comece povoado e seja resetado sempre que ela for reiniciada, então na página Users vocês verão alguns usuários já cadastrados.
</details>

<details open>
  <summary>:brazil: Versão em Português</summary>
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
 Acesse a pasta do projeto e rode o comando
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

# Vídeo explicativo

Segue o endereço do vídeo explicativo sobre o que foi desenvolvido e como instalar:

[Desafio Sharenergy por Kelder Passos](https://youtu.be/0PdCoLXGJGM)
</details>