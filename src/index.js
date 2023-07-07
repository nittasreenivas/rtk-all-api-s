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
import People from './components/People';
import SinglePerson from './components/SinglePerson';
import Books from './components/Books';
import Singlebook from './components/Singlebook';
import Meals from './components/Meals';
import SingleMeal from './components/SingleMeal';
import Crew from './components/Crew';
import Singlecrew from './components/Singlecrew';
import Rockets from './components/Rockets';
import Singlerocket from './components/Singlerocket';
import Ships from './components/Ships';
import SingleShip from './components/SingleShip';
import Launch from './components/Launch';
import Singlelaunch from './components/Singlelaunch';
import Launchpad from './components/Launchpad';
import Singlelaunchpad from './components/Singlelaunchpad';
import Dragons from './components/Dragons';
import Singledragon from './components/Singledragon';


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
      },
      {
        path:'/people',
        element:<People></People>
      },
      {
        path:'/people/:id',
        element:<SinglePerson></SinglePerson>
      },
      {
        path:'/books',
        element:<Books></Books>
      },
      {
        path:'/books/:title',
        element:<Singlebook></Singlebook>
      },
      {
        path:'/meals',
        element:<Meals></Meals>
      },
      {
        path:'/meals/:strMeal',
        element:<SingleMeal></SingleMeal>
      },
      {
        path:'/crew',
        element:<Crew></Crew>
      },
      {
        path:'/crew/:id',
        element:<Singlecrew></Singlecrew>
      },
      {
        path:'/rockets',
        element:<Rockets></Rockets>
      },
      {
        path:'/rockets/:id',
        element:<Singlerocket></Singlerocket>
      },
      {
        path:'/ships',
        element:<Ships></Ships>
      },
      {
        path:'/ships/:id',
        element:<SingleShip></SingleShip>
      },
      {
        path:'/launch',
        element:<Launch></Launch>
      },
      {
        path:'/launch/:id',
        element:<Singlelaunch></Singlelaunch>
      },
      {
        path:'/launchpad',
        element:<Launchpad></Launchpad>
      },
      {
        path:'/launchpad/:id',
        element:<Singlelaunchpad></Singlelaunchpad>
      },
      {
        path:'/dragons',
        element:<Dragons></Dragons>
      },
      {
        path:'/dragons/:id',
        element:<Singledragon></Singledragon>
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
