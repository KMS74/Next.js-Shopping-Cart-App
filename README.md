# React Next.js Shopping Cart App

This project is a React Next.js app that consumes the Fake Store API (https://fakestoreapi.com) to display a list of products, allow users to add products to a cart, view the contents of their cart, and edit their cart.

## Live Preview 
https://next-js-shopping-cart-app.vercel.app/

## Required Technologies

- Typescript
- Reactjs
- Next.js
- Context API
- SCSS
- Material UI

## Usage

The app consists of two pages: the home page and the cart page .

### Home Page

The home page displays a list of products retrieved from the Fake Store API. Each product is displayed with its name, picture, category, price, and available quantity.

### Cart Page

The cart page displays the contents of the user's cart, including the items quantity, items cost, and total cost. Users can edit the quantity of items in their cart or remove items entirely.

## Features

- Displays a list of products retrieved from the Fake Store API.
- Allows users to add products to their cart.
- Allows users to view the contents of their cart.
- Allows users to edit the quantity of items in their cart or remove items entirely.
- React Material UI custome theme
- Toggle between light and dark theme

## Contributing

Contributions to the project are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request to merge your changes into the main repository.

## Credits

This app was created by [Karem Shabana](https://www.linkedin.com/in/karem-shabana/)
.

## License

This project is licensed under the MIT license. See the `LICENSE` file for more details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
