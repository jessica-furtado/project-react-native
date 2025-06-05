# 📱 Projeto React Native – Gerenciador de Cursos

Este é um aplicativo mobile desenvolvido em **React Native** com integração ao **Firebase** (Firestore e Autenticação), que permite o cadastro, listagem, edição e exclusão de cursos personalizados para cada usuário logado.

---

## 🚀 Funcionalidades

- 📋 Listar cursos cadastrados
- ➕ Adicionar novos cursos
- ✏️ Editar cursos existentes
- 🗑️ Excluir cursos
- 🔐 Autenticação de usuários com e-mail e senha (Firebase)
- 🧠 Associação de cursos ao usuário autenticado

---

## 🛠️ Tecnologias e Bibliotecas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Firebase](https://firebase.google.com/)
  - Firestore
  - Authentication
- [React Navigation](https://reactnavigation.org/)
- [Async Storage](https://github.com/react-native-async-storage/async-storage)

---

## 📁 Estrutura de Pastas

```
aula03/
├── App.js                     # Arquivo principal da aplicação
├── package.json              # Dependências e scripts
└── src/
    ├── config/               # Configuração do Firebase
    ├── context/              # Contexto global (auth)
    ├── screens/              # Telas do app (Login, Home, Formulário etc.)
    └── services/             # Comunicação com o Firestore
```

---

## 🔧 Como executar

### 1. Clone o repositório
```bash
git clone https://github.com/jessica-furtado/project-react-native.git
cd project-react-native/aula03
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o Firebase

No arquivo `src/config/firebaseConfig.js`, insira suas credenciais do Firebase:

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMÍNIO.firebaseapp.com",
  projectId: "SEU_PROJETO_ID",
  ...
}
```

### 4. Execute o projeto
```bash
npx expo start
```

## 👩‍💻 Desenvolvido por

**Jéssica Furtado**  
[🔗 GitHub](https://github.com/jessica-furtado)

---

## 📌 Observações

Este projeto é didático e foi desenvolvido como prática de React Native com Firebase.  
Não utilize as regras de segurança acima em ambiente de produção.

