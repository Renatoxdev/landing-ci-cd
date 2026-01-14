# 🚀 Projeto Next.js com CI/CD (GitHub Actions + Vercel)

## 📌 Visão Geral
Este projeto consiste em uma **landing page desenvolvida em Next.js**, criada com o objetivo de demonstrar, na prática, a configuração de uma **pipeline completa de CI/CD** utilizando **GitHub Actions** para Integração Contínua e **Vercel** para Deploy Contínuo.

O pipeline executa automaticamente validações de código, testes, build e deploy a cada push na branch principal (`main`).

---

## 🛠️ Tecnologias Utilizadas
- **Next.js**
- **Node.js (>= 20.9.0)**
- **GitHub Actions**
- **Vercel**
- **ESLint**

---

## 🌐 Aplicação Publicada
🔗 **URL:** [https://SEU-PROJETO.vercel.app](https://vercel.com/renatos-projects-74401050/landing-ci-cd)

> Substitua o link acima pela URL real gerada pela Vercel.

---

## ⚙️ Requisitos para Execução Local
- Node.js versão **20 ou superior**
- npm

---

## ▶️ Como Executar o Projeto Localmente

```bash
# Clonar o repositório
git clone https://github.com/Renatoxdev/landing-ci-cd/

# Entrar na pasta do projeto
cd landing-ci-cd

# Instalar dependências
npm ci

# Rodar em ambiente de desenvolvimento
npm run dev
```

A aplicação estará disponível em:  
👉 http://localhost:3000

---

## 📜 Scripts Disponíveis

| Script | Descrição |
|------|-----------|
| `npm run lint` | Executa a análise estática de código com ESLint |
| `npm run test` | Executa os testes automatizados |
| `npm run build` | Gera o build de produção da aplicação |
| `npm run dev` | Inicia o servidor de desenvolvimento |

---

## 🔄 Pipeline CI/CD

A pipeline está definida no arquivo:

```
.github/workflows/main.yml
```

### 📌 Quando ela roda?
- A cada **push** na branch `main`
- A cada **pull request** para a branch `main`

### 🧩 Etapas da Pipeline (CI)
1. Checkout do repositório
2. Configuração do Node.js
3. Instalação das dependências (`npm ci`)
4. Execução do ESLint
5. Execução dos testes
6. Build da aplicação

### 🚀 Deploy Contínuo (CD)
- Após um push bem-sucedido na branch `main`
- Deploy automático realizado na **Vercel**

## ✅ Como Verificar o Funcionamento da Pipeline

1. Acesse o repositório no GitHub
2. Clique na aba **Actions**
3. Selecione o workflow **CI/CD Pipeline**
4. Verifique se todas as etapas foram executadas com sucesso

Um status verde indica que o CI e o deploy foram concluídos corretamente.

---

## 🎓 Contexto Acadêmico
Este projeto foi desenvolvido como parte de um **trabalho acadêmico**, com foco em demonstrar:
- Boas práticas de Integração Contínua
- Automação de deploy
- Uso de pipelines modernas em projetos Front-end

---

## 📄 Licença
Este projeto é de uso educacional.
