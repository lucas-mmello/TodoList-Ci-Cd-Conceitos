# 📋 TodoList - Sistema Frontend com Testes e CI/CD

Este projeto é uma **aplicação front-end** de lista de tarefas (**TodoList**) criada com **React + TypeScript**, utilizando **LocalStorage** como simulação de banco de dados.  
Foi desenvolvido com foco em **boas práticas**, **testes unitários** e **automação com CI/CD (GitHub Actions + Netlify)**.

---

## 📚 Sumário

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Como rodar o projeto](#-como-rodar-o-projeto)
- [CI/CD](#-cicd)
- [Testes](#-testes)
- [Aprendizados](#-aprendizados)
- [Licença](#-licença)

---

## 🚀 Funcionalidades

- ✅ Criar, excluir e concluir tarefas
- 💾 Armazenamento via `localStorage` (simulando um banco de dados)
- 🧪 Testes automatizados com Jest
- 🔁 Deploy automático no Netlify via GitHub Actions
- 🛠️ Boas práticas com TypeScript e React

---

## 🧰 Tecnologias

- React
- TypeScript
- Jest
- Netlify
- GitHub Actions

---

## 📦 Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/lucas-mmello/TodoList-Ci-Cd-Conceitos.git

# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Executar testes
npm test
```

---

## 🔄 CI/CD

- CI: Validação de testes com **GitHub Actions**
- CD: Deploy automático no **Netlify**, apenas se os testes forem aprovados
- Deploy feito via **Netlify CLI** configurado no GitHub Actions

🔗 Link do projeto hospedado:  
👉 [https://todolist-local-cicd.netlify.app/](https://todolist-local-cicd.netlify.app/)

---

## 🧪 Testes

Os testes unitários cobrem o serviço de manipulação da lista de tarefas (`TodoService`) usando Jest, incluindo:

- Recuperação de dados do localStorage
- Salvamento e leitura correta dos todos
- Uso de `setItem` com `spyOn`

---

## 📘 Aprendizados

Durante o desenvolvimento deste projeto, aprofundei meus conhecimentos em:

- 🧠 Componentização e estrutura de projetos React com TypeScript
- 💡 Uso do `localStorage` como persistência simulada
- ✅ Testes unitários com Jest, incluindo uso de `spyOn`, mocks e cobertura de funções
- 🔄 Integração e entrega contínua com GitHub Actions
- 🚀 Deploy automatizado com Netlify CLI e autenticação por tokens
- 📁 Organização de código, separação de responsabilidades e reutilização de componentes

---

## 📄 Licença

Distribuído sob a licença MIT.  
Feito com 💻 por **Lucas Matos de Mello** ✨

---

# 📋 TodoList - Frontend App with Tests & CI/CD

This is a **simple frontend TodoList project** built with **React + TypeScript**, using **LocalStorage** as a mock database.  
It was designed to practice and demonstrate:

- ✅ React development with TypeScript
- 🧪 Unit tests with Jest
- ⚙️ CI/CD automation using GitHub Actions and Netlify

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [CI/CD](#-cicd)
- [Tests](#-tests)
- [Learnings](#-learnings)
- [License](#-license)

---

## 🚀 Features

- Add, complete, and delete tasks
- Save tasks in `localStorage` (simulating a database)
- Run unit tests with **Jest**
- Automatically deploy the app with **Netlify** after successful tests

---

## 🧰 Stack

- React
- TypeScript
- Jest
- GitHub Actions
- Netlify CLI

---

## 📦 How to run locally

```bash
git clone https://github.com/lucas-mmello/TodoList-Ci-Cd-Conceitos.git
cd your-repo

npm install
npm run dev

npm test
```

---

## 🔄 CI/CD

- CI: Run tests on every push using **GitHub Actions**
- CD: Deploy to **Netlify** only if tests pass
- Controlled with **Netlify CLI** and environment secrets

🔗 Live demo:  
👉 [https://todolist-local-cicd.netlify.app/](https://todolist-local-cicd.netlify.app/)

---

## 🧪 Tests

Unit tests are focused on the `TodoService`, including:

- Fetching data from `localStorage`
- Correctly saving and retrieving tasks
- Spying on `setItem` with Jest's `spyOn` and mock functions

---

## 📘 Learnings

Throughout the development of this project, I deepened my understanding of:

- 🧠 Component-based architecture using React and TypeScript
- 💡 Simulating a database using `localStorage`
- ✅ Unit testing with Jest, including use of `spyOn`, mocks and test coverage
- 🔄 Building CI/CD pipelines with GitHub Actions
- 🚀 Deploy automation with Netlify CLI and token authentication
- 📁 Code organization and separation of responsibilities

---

## 📄 License

Licensed under the MIT License.  
Made with 💻 by **Lucas Matos de Mello**
