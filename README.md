# Getting Started

## Pre-requisties

- [Vtex CLI](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-installation-and-command-reference)
- [Knowledges about Vtex IO](https://developers.vtex.com/vtex-developer-docs/docs/welcome)
- An vtex account and workspace

## TechStack

- TypeScript
- Vtex IO
- Graphql
- React

## Custom applications

- Vtex IO Store Theme
- Checkout
- Custom Blocks

## Code Tools

- [Husky](https://typicode.github.io/husky/#/)
- [Eslint](http://eslint.org/)
- [Prettier](https://prettier.io/)

# Instalation

## Login and linking

Login in `vtex-cli`

```
vtex login {vtex-account}
```

Change workspace

```
vtex use {workspace}
```

Link app

```
vtex link
```

## Project structure

```

cdlc-store/
├── checkout/
│ │ ├──checkout-ui-custom/
│ │ ├──docs
│ │ └──manifest.json
├── custom-blocks/
│ ├── configs/
│ │ ├──bomb-temporizator.ts
│ │ └──progress-bar.ts
│ ├── react/
│ │ ├──components/
│ │ ├──graphql/
│ │ ├──hooks/
│ │ ├──layouts/
│ │ ├──typings/
│ │ └──utils/
│ ├── store/
│ │ └──interfaces.json
├── store/
│ ├── blocks/
│ │ ├──custom-departments/
│ │ ├──custom-pages/
│ │ ├──institucional/
│ │ └──marcas/
│ └── routes.json
├── styles/
│ ├── configs/
│ ├── css/
│ ├── iconpacks/
├── .eslintrc
├── .prettierrc
├── .gitignore
├── .commitlint.config.js
├── manifest.json
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock

```

