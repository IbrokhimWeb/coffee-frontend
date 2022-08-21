import ItemImage1 from "../../img/service-1.jpg";
import ItemImage2 from "../../img/service-2.jpg";
import ItemImage3 from "../../img/service-3.jpg";
import ItemImage4 from "../../img/service-4.jpg";
import "./OurServicesItem.css"

export const OurServicesItem = () => {
  return (
    <>
      <li className="our-services__item service-item">
        <img className="service-item__img" src={ItemImage1} alt="" width="207" height="207"/>
        <div className="service-item__content">
          <h3 className="service-item__title service-item__title--before1">Fastest Door Delivery</h3>
          <p className="service-item__desc">
            Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
            lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
            erat tempor
          </p>
        </div>
      </li>
      <li className="our-services__item service-item">
        <img className="service-item__img" src={ItemImage2} alt="" width="207" height="207"/>
        <div className="service-item__content">
          <h3 className="service-item__title service-item__title--before2">Fresh Coffee Beans</h3>
          <p className="service-item__desc">
            Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
            lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
            erat tempor
          </p>
        </div>
      </li>
      <li className="our-services__item service-item">
        <img className="service-item__img" src={ItemImage3} alt="" width="207" height="207"/>
        <div className="service-item__content">
          <h3 className="service-item__title service-item__title--before3">Best Quality Coffee</h3>
          <p className="service-item__desc">
            Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
            lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
            erat tempor
          </p>
        </div>
      </li>
      <li className="our-services__item service-item">
        <img className="service-item__img" src={ItemImage4} alt="" width="207" height="207"/>
        <div className="service-item__content">
          <h3 className="service-item__title service-item__title--before4">Online Table Booking</h3>
          <p className="service-item__desc">
            Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
            lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
            erat tempor
          </p>
        </div>
      </li>
    </>
  );
};
