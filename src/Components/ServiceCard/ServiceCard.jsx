import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {id, name, image, title} = service || {}
    return (
        <div data-aos="flip-left">
            <Link to={`/service/${id}`} className="card  md:h-96 lg:card-side  lg:h-72 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album" className="h-96 "/></figure>
  <div className="card-body lg: -mt-4">
    <h2 className="card-title text-3xl font-semibold">{name}</h2>
    <p className="w-72 md:w-full lg:w-72">{title}</p>
    <div className="card-actions">
      <button className="h-10 w-24 bg-red-300 text-white rounded-full">View More</button>
    </div>
  </div>
</Link>
        </div>
    );
};

export default ServiceCard;