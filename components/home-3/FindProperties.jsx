import Link from "next/link";
import findProperties from "../../data/findProperties";
import {countries} from '../../data/countries';

const FindProperties = () => {
  return (
    <>
      {countries.slice(0, 6).map((item) => (
        <div className="col-sm-6 col-md-4 col-lg-4 col-xl" key={item.id}>
          <Link href={item?.items[0].routerPath}>
            <a className="properti_city d-block">
              <div className="thumb">
                <img 
                  className="img-fluid w-100      object-fill   img-style" 
                // className='img-whp'
                // style={{ width: '300px !important', height: '350px !important'}}
                
                src={item?.image} alt="pc1.jpg" />
              </div>
              <div className="overlay">
                <div className="details">
                  <h4>{item?.title}</h4>
                  {/* <p>{item.items?.length} Properties</p> */}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </>


// -------








  );
};

export default FindProperties;
