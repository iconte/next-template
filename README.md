This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Acesso frontend

## Getting Started

Para rodar o projeto:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## GitFlow

Para geração de novos recursos ou manutenças dos ja presentes neste projeto, é importante seguir o gitflow estabelecido.

O git está organizado em dois branch principais `master` e `homol`. A `master` é considerada o ambiente de produção,
ou seja, tendo todos os recursos devidamente testados e homologados. Já a branch `homol` é o ambiente de homologação,
nela novos recursos são fundidos, testados e validados antes de fundir para `master`.

Durante o processo de desenvolvimento de novos recursos ou manutenção, novas branch são criadas saindo do ambiente de
homologação. Para criação a nova branch, é importante passar o contexto da branch, podendo ser eles:

- **feature**: para novos recursos;
- **hotfix**: correção de bug crítico encontrado, implementação em produção com urgência;
- **bugfix**: correção de bug não crítico encontrado.

Além do contexto, deve passar um título para a branch, tendo as seguindo informações;

1. Descrição **breve** da branch.

Deste modo, um exemplo para uma branch de um novo recurso fica assim:

```bash
git checkout -b feature/nova-mascara-no-input
```

Apos as implementar na branch nova as melhorias ou manutenção, deve-se criar
um [Pull Requests (PR)](https://github.com/Plataforma-TED10523/plataforma-components/pulls)
para branch `homol`. Depois do PR se avaliado e aceito a branch criada deve ser deletada,
pois é importante manter somente as branch principais.

> A deleção da branch para `feature`, `hotfix` ou `bugfix` é dever do revisor de código
