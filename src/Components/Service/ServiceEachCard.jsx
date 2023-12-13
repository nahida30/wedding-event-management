import React from 'react';

const ServiceEachCard = ({service}) => {
    const {id, name, image, title, short_description, price, items} = service || {}
    return (
        <div>
            <div >
            <h1 className='text-3xl px-7 lg:px-56 font-bold'>{name}</h1>
            <p className='text-xl font-semibold px-7 lg:px-56'>{short_description}</p>
            </div>
            <div className="hero px-7 lg:px-56">
                
            <div className="card mt-5 lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">Pricing</h2>
    <ol>
    <li>{items}</li>
  
</ol>
<hr />

<p>Total: ${price}</p>
    <div className="card-actions mx-auto">
      <button className="btn btn-primary">Make Reservation</button>
    </div>
  </div>
</div>
  
             </div>
        </div>
    );
};

export default ServiceEachCard;