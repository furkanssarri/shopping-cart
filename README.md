# LAYERUP.

a modern e-commerce application built with react and vite. this project aims to demonstrate react concepts as well as fetch management.

## demo

here is the live [demo](https://furkanssarri-shopping-cart.netlify.app/) of the project.

## features

this project features the following:

###

- **product catalog**: browse products fetched
- **shopping cart**: add or remove items to the cart
- **responsive design**: mobil-first gui
- **modern routing**: routing for modern spa

### tech stack

the following tech stack was used in this project:

- [react.js](https://react.dev/)
- [vite](https://vite.dev/)
- [react-router](https://reactrouter.com/)
- [fakestore-api](https://fakestoreapi.com/)
- [css-modules](https://github.com/css-modules/css-modules)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)

## installation

you can install and start contributing to this project by following the steps below.

### pre-requisites

in order to run this, you will need to have:

- [nodejs](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

1. clone the repo

```bash
git clone <github-repo>
cd <root-directory>
```

2. install dependencies

```bash
npm install
```

3. start dev

```bash
npm run dev
```

## folder structure

```
shopping-cart/
└── src/
    ├── App.css
    ├── App.jsx
    ├── routes.jsx
    ├── components/
    │   ├── Footer/
    │   │   ├── Footer.jsx
    │   │   └── footer.module.css
    │   ├── Header/
    │   │   ├── Header.jsx
    │   │   ├── header.module.css
    │   │   └── Logo.jsx
    │   └── product-thumbnail/
    │       ├── ProductThumbNail.jsx
    │       └── productThumbNail.module.css
    ├── pages/
    │   ├── ErrorPage.jsx
    │   ├── about/
    │   │   ├── About.jsx
    │   │   └── about.module.css
    │   ├── Cart/
    │   │   ├── Cart.jsx
    │   │   └── cart.module.css
    │   ├── home/
    │   │   ├── Home.jsx
    │   │   └── home.module.css
    │   ├── Product/
    │   │   ├── Product.jsx
    │   │   └── product.module.css
    │   └── Shop/
    │       ├── Shop.jsx
    │       └── shop.module.css
    └── utils/
        └── useData.js
```
