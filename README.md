# NLW Front AI

Uma aplicação moderna em React para criação e gerenciamento de salas com recursos de IA, desenvolvida durante o NLW (Next Level Week). O projeto utiliza as melhores práticas do ecossistema React, com foco em performance, acessibilidade e experiência do usuário.

---

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Páginas](#páginas)
- [Componentes](#componentes)
- [Componentes de UI](#componentes-de-ui)
- [Hooks & API](#hooks--api)
- [Tipos de API](#tipos-de-api)
- [Utilitários](#utilitários)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

---

## Visão Geral

O NLW Front AI permite criar, listar e interagir com salas, integrando recursos de IA e gravação de áudio. O projeto é modular, escalável e utiliza bibliotecas modernas para garantir código limpo e manutenível.

---

## Tecnologias Utilizadas

- **React 19** & **React DOM** – Biblioteca principal de UI
- **TypeScript** – Tipagem estática
- **Vite** – Bundler e servidor de desenvolvimento rápido
- **Tailwind CSS** & **tw-animate-css** – Estilização utilitária e animações
- **Radix UI** – Primitivas acessíveis de componentes
- **Lucide React** – Ícones modernos
- **TanStack React Query** – Gerenciamento de dados assíncronos
- **React Router DOM** – Roteamento SPA
- **React Hook Form** & **Zod** – Formulários e validação
- **Class Variance Authority, clsx, tailwind-merge** – Utilitários de composição de classes
- **Dayjs** – Manipulação de datas
- **Biome** – Linter e formatter
- **Ultracite** – Ferramentas de DX

---

## Scripts Disponíveis

- `pnpm dev` – Inicia o servidor de desenvolvimento
- `pnpm build` – Gera build de produção
- `pnpm preview` – Visualiza o build de produção localmente

---

## Estrutura do Projeto

```
nlw-front-ai/
├── src/
│   ├── components/
│   │   ├── create-room-form.tsx
│   │   ├── question-form.tsx
│   │   ├── question-item.tsx
│   │   ├── question-list.tsx
│   │   ├── room-list.tsx
│   │   └── ui/
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   ├── pages/
│   │   ├── create-room.tsx
│   │   ├── record-room-audio.tsx
│   │   └── room.tsx
│   ├── http/
│   │   ├── use-create-question.ts
│   │   ├── use-create-room.ts
│   │   ├── use-room-questions.ts
│   │   ├── use-rooms.ts
│   │   └── types/
│   │       ├── create-question-request.ts
│   │       ├── create-question-response.ts
│   │       ├── create-room-request.ts
│   │       ├── create-room-response.ts
│   │       ├── get-room-questions-response.ts
│   │       └── get-rooms-response.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Páginas

- **create-room.tsx** – Página para criar uma nova sala.
- **room.tsx** – Página de detalhes e interação de uma sala específica.
- **record-room-audio.tsx** – Página para gravação de áudio em uma sala.

---

## Componentes

- **create-room-form.tsx** – Formulário para criação de salas.
- **question-form.tsx** – Formulário para envio de perguntas.
- **question-item.tsx** – Exibe uma pergunta individual.
- **question-list.tsx** – Lista de perguntas de uma sala.
- **room-list.tsx** – Lista de salas disponíveis.

---

## Componentes de UI (`src/components/ui/`)

- **badge.tsx** – Selo/etiqueta visual.
- **button.tsx** – Botão reutilizável.
- **card.tsx** – Cartão para agrupar conteúdos.
- **form.tsx** – Elementos de formulário estilizados.
- **input.tsx** – Campo de entrada de texto.
- **label.tsx** – Rótulo para inputs.
- **textarea.tsx** – Área de texto para inputs maiores.

---

## Hooks & API (`src/http/`)

- **use-create-room.ts** – Hook para criação de salas via API.
- **use-rooms.ts** – Hook para listagem de salas.
- **use-create-question.ts** – Hook para envio de perguntas.
- **use-room-questions.ts** – Hook para listagem de perguntas de uma sala.

---

## Tipos de API (`src/http/types/`)

- **create-room-request.ts** – Tipo para requisição de criação de sala.
- **create-room-response.ts** – Tipo para resposta de criação de sala.
- **get-rooms-response.ts** – Tipo para resposta de listagem de salas.
- **create-question-request.ts** – Tipo para requisição de criação de pergunta.
- **create-question-response.ts** – Tipo para resposta de criação de pergunta.
- **get-room-questions-response.ts** – Tipo para resposta de listagem de perguntas de uma sala.

---

## Utilitários

- **utils.ts** – Funções utilitárias auxiliares.

---

## Como Contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Push para o seu fork: `git push origin feature/nome-da-feature`
5. Abra um Pull Request

---

## Licença

Este projeto faz parte do NLW (Next Level Week) da Rocketseat. Consulte o arquivo de licença para mais detalhes.

---

**Dúvidas ou sugestões? Fique à vontade para abrir uma issue!** 