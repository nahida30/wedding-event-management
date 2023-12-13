
import { useLoaderData } from "react-router-dom";
import About from "../About/About";
import Header from "../Header/Header";
import Services from "../Services/Services";
import ChooseUs from "../ChooseUs/ChooseUs";



const Home = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div>
            
            <Header></Header>
            
            <About></About>
            <Services services ={services}></Services>
            <ChooseUs></ChooseUs>


        </div>
    );
};

export default Home;






