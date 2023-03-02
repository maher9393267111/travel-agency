import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBannerServices = ({title ,mainImage , country}) => {

console.log('banner??????????', title, mainImage)


  return (
    <section className="inner_page_breadcrumb"
    style={{ 
        backgroundImage: mainImage ? `url('${mainImage}')`  : `url("https://images.unsplash.com/photo-1675855547482-16834b36d4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")` ,
        backgroundSize:'cover',     backgroundPosition:'center'
      }}
    
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb country ={country} title={title} />
              <h4 className="breadcrumb_title">{title}</h4>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbBannerServices;
