import React, { lazy } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
const Home = lazy(() => import('@/pages/home'))
const About = lazy(() => import('@/pages/about'))
const More =  lazy(() => import('@/pages/more'))
// const 
export default createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'more',
    element: <More />
  }
]);