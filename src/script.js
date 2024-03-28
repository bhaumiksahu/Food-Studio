import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from"./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const Container = () => {
    return ( 
        <Provider store={appStore}>
          <div className = "container">      
            <Header/>       
            <Outlet/>       
          </div>
        </Provider>
        
    );
};
const appRouter=createBrowserRouter(
    [
        {
            path:"/",
            element:<Container/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/restaurant/:resId",
                    element:<ResMenu/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                }
            ],
            errorElement:<Error/>
        },
        
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( < RouterProvider router={appRouter} /> );