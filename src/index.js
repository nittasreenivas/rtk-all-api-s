import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import GithubUsers from './components/GithubUsers';
import SingleGithubUser from './components/SingleGithubUser';
import SingleDummy from './components/SingleDummy';
import Photo from './components/Photo';
import SinglePhoto from './components/SinglePhoto';
import Ricky from './components/Ricky';
import SingleRicky from './components/SingleRicky';
import Dogs from './components/Dogs';
import SingleDog from './components/SingleDog';
import Fake from './components/Fake';
import SingleFake from './components/SingleFake';
import Countries from './components/Countries';
import SingleCountry from './components/SingleCountry';
import Cocktails from './components/Cocktails';
import SingleCocktail from './components/SingleCocktail';
import Plazo from './components/Plazo';
import SinglePlazo from './components/SinglePlazo';
import Button from './components/Button';
import RandomUser from './components/RandomUser';
import SingleRandomUser from './components/SingleRandomUser';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/github',
        element:<GithubUsers></GithubUsers>
      },
      {
        path:'/github/:id',
        element:<SingleGithubUser></SingleGithubUser>
      },
      {
        path:'/products/:id',
        element:<SingleDummy></SingleDummy>
      },
      {
        path:'/photo',
        element:<Photo></Photo>
      },
      {
        path:'/photo/:id',
        element:<SinglePhoto></SinglePhoto>
      },
      {
        path:'/ricky',
        element:<Ricky></Ricky>
      },
      {
        path:"/ricky/:id",
        element:<SingleRicky></SingleRicky>
      },
      {
        path:'/dog',
        element:<Dogs></Dogs>
      },
      {
        path:'/dog/:name',
        element:<SingleDog></SingleDog>
      },
      {
        path:'/fake',
        element:<Fake></Fake>
      },
      {
        path:'/fake/:id',
        element:<SingleFake></SingleFake>
      },
      {
        path:'/country',
        element:<Countries></Countries>
      },
      {
        path:'/country/:name',
        element:<SingleCountry></SingleCountry>
      },
      {
        path:'/cocktail',
        element:<Cocktails></Cocktails>
      },
      {
        path:'/cocktail/:id',
        element:<SingleCocktail></SingleCocktail>
      },
      {
        path:'/plato',
        element:<Plazo></Plazo>
      },
      {
        path:'/plato/:id',
        element:<SinglePlazo></SinglePlazo>
      },
      {
        path:'/button',
        element:<Button></Button>
      },
      {
        path:'/random',
        element:<RandomUser></RandomUser>
      },
      {
        path:'/random/:id',
        element:<SingleRandomUser></SingleRandomUser>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
