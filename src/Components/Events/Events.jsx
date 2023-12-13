import eventPhoto1 from '/src/assets/images/Pricing_img1.jpg'
import eventPhoto2 from '/src/assets/images/Pricing_img2.jpg'
import eventPhoto3 from '/src/assets/images/Pricing_img3.jpg'
const Events = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 p-10" >
            
            <div className="card w-96 bg-base-100 shadow-xl" >
  <figure><img src={eventPhoto1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Basic</h2>
    <p>Basic wedding planning is budget-conscious, focusing on cost-effective options like affordable venues, smaller guest lists, and DIY elements. Services and decor are kept simple, with limited extras and a more modest approach to attire and guest events.</p>
    <div>
    <button className="h-11  w-full rounded-full bg-red-200" >Make Reservations</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={eventPhoto2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Luxury</h2>
    <p>Luxury wedding planning is all about opulence. Couples with high budgets choose exclusive venues, top-tier vendors, and create lavish decor using premium elements. Wedding attire is couture or designer, and the guest list includes VIPs. Elaborate pre- and post-wedding events and a wealth of extras ensure a truly extravagant experience.</p>
    <div>
    <button className="h-11  w-full rounded-full bg-red-200" >Make Reservations</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={eventPhoto3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Standard</h2>
    <p>Standard wedding planning finds a balance between budget and elegance. Couples have a moderate budget for mid-range and some higher-end services. They choose versatile venues, accommodate a broader guest list, and include events like rehearsal dinners. Decor and attire are moderately luxurious, with some personalized extras.</p>
    <div>
    <button className="h-11  w-full rounded-full bg-red-200" >Make Reservations</button>
    </div>
  </div>
</div>


        </div>
    );
};

export default Events;