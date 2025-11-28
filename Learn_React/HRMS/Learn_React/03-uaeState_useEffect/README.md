<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

## Props in Advance

- useState
  -create counter using useState
- create counter create one copmponent and create another componet in first component and use there useState
- use state je compnent ma hoi te akha compomnent ne re render kare etla mate je component ma use krvo hoi te alag component bnavi nakhvano
- { } single curly braces means represent we use dynamic value and javascript
- {{}} it means in javascript we write object
- compoent is a function

<!-- 3 ways we use css -->

1. create css file and impoort

2. create object css in component file and use direct
   ex-
   const btnStyle{
   backgroundColor: "Red";
   color: "blue";
   }

   <!-- use in element : -->

   ex - style={btnStyle}

3. create file (style.module.css) in this file we can set any name but (.module.css) is compulsory

- then add css
  ex -
  .rating{
  padding : 10px;
  margin: 15px;
  }

 <!-- - then import this file where u want use  in element  and u dont use in className between dashed  (rating - data ) like this u can use Camel Case-->

ex - className = {style.rating}
