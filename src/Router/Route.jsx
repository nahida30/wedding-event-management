import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Error from "../Components/Error/Error";
import Service from "../Components/Service/Service";
import PrivateRoot from "../Components/Root/PrivateRoot";
import Contact from "../Components/Contact/Contact";
import Pricing from "../Components/Events/Events";
import Events from "../Components/Events/Events";
import Gallery from "../Components/Gallery/Gallery";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/registration",
            element: <Registration></Registration>
          },
          {
            path: "/service/:id",
            element: <PrivateRoot><Service></Service></PrivateRoot>,
            loader:()=>fetch('/data.json')
          },
          {
            path: "/contact",
            element: <Contact></Contact>
          },
          {
            path: "/events",
            element: <PrivateRoot><Events></Events></PrivateRoot>
           
          },
          {
            path:"/gallery",
            element:<PrivateRoot><Gallery></Gallery></PrivateRoot>,
            loader: ()=>fetch('/image.json')
          }

        ]
    }
])


export default myCreatedRoute;