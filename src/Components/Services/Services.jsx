import ServiceCard from "../ServiceCard/ServiceCard";


const Services = ({services}) => {
    console.log(services);
    return (
        <div className="">
            {/* <h1 className="text-4xl text-center mt-5 font-bold ">The Unrivaled Scenery, <span className="text-red-300">Unforgettable Wedding Program</span></h1> */}
            <h1 className="text-center text-4xl font-bold underline mt-4 text-red-300">Our Services</h1>


            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 p-5 lg:p-20">
                {
                   services ?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;