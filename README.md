# Templo dos Magos

Bem-vindo ao repositório do e-commerce **Templo dos Magos**. Este projeto é uma loja online que vende cartas mágicas e jogos de tabuleiro, com um visual vibrante e estilo cartoon.

## Estrutura do Projeto

```
templo-dos-magos/
├── app/                           # Rotas e páginas (Next.js App Router)
│   ├── layout.tsx                # Layout raiz
│   ├── page.tsx                  # Home
│   ├── loja/                     # Página de listagem dos produtos
│   │   └── page.tsx
│   ├── produto/                  # Página de produto
│   │   └── [id]/page.tsx
│   ├── carrinho/                 # Carrinho de compras
│   │   └── page.tsx
│   ├── checkout/                 # Finalização de compra
│   │   └── page.tsx
│   ├── admin/                    # Área administrativa
│   │   ├── produtos/page.tsx
│   │   ├── pedidos/page.tsx
│   │   └── layout.tsx
│   └── api/                      # Rotas de API
│       ├── produtos/route.ts
│       ├── pedidos/route.ts
│       └── auth/route.ts
│
├── components/                   # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CartIcon.tsx
│   └── Button.tsx
│
├── services/                     # Chamadas externas e lógica de API
│   └── productService.ts
│   └── authService.ts
│
├── lib/                          # Funções utilitárias e libs genéricas
│   └── formatPrice.ts
│   └── validateInput.ts
│
├── hooks/                        # Custom React hooks
│   └── useCart.ts
│
├── store/                        # Zustand ou outro gerenciador de estado
│   └── cartStore.ts
│
├── types/                        # Tipagens do TypeScript
│   └── product.ts
│   └── user.ts
│
├── public/                       # Arquivos públicos (imagens, favicon etc)
│   └── images/
│       └── logo.png
│
├── styles/                       # Estilos globais e tokens
│   └── globals.css
│   └── variables.css
│
├── middleware.ts                # Middleware (auth, logger etc)
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web.
- **Tailwind CSS**: Framework de CSS para estilização.
- **Zustand**: Gerenciamento de estado.

## Instruções para Iniciar

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Sugestões e melhorias são bem-vindas!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
