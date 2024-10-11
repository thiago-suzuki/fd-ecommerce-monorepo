# Gam3r.store
Aplicação Gam3r.store feito durante a trilha intermediária da Formação DEV

<h1 align="center">
  <img alt="NLW" title="NLW" width="700" src=".github/app.png" />
</h1>


<br>

## 💻 Tecnologias Utilizadas nesse Projeto
<div style="display: inline_block">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg">
  <img align="center" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg">
  <img align="center" height="50" width="60" src=".github/neon.svg">
  <img align="center" height="50" width="60" src=".github/turborepo.svg">

</div>

<br>

## Especificações
- Node: 20.17.0
- Pacote de Gerenciamento de Dependências: YARN
- Framework: TurboRepo + NestJS + NextJS e React + Expo e React Native
- Hospedagem Frontend: Vercel
- Hospedagem Backend: Render


<br>
<br>
<br>
<br>


# Como usar o projeto

## 1ºPasso - Instalar as dependências
```bash
$ yarn install
```

## 2ºPasso - Configurar .env dentro de apps/frontend
```bash
NEXT_PUBLIC_API_URL=http://localhost:3005
```

## 3ºPasso - Configurar .env dentro de apps/monile (Trocar IP para o da sua máquina - IPV4)
```bash
API_URL=http:/192.168.15.49:3005
```

## 4ºPasso - Configurar .env dentro de apps/backend
```bash
DATABASE_URL="postgresql://neondb_owner:dqLVOZmaM56E@ep-dawn-rain-a4tn0ckm.us-east-1.aws.neon.tech/neondb?sslmode=require"
```

## 5ºPasso - Rodar o build
```bash
$ yarn build
```

## 6ºPasso - Rodar o Projeto
```bash
$ yarn dev
```

<br>
<br>
<br>
<br>


# Link do Projeto
- Frontend: https://fd-ecommerce-monorepo-frontend.vercel.app
- Backend: https://fd-ecommerce-backend.onrender.com