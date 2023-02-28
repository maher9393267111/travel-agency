import BreadCrumb from "../common/BreadCrumb";

const BreadCrumbBannerServices = ({title}) => {
  return (
    <section className="inner_page_breadcrumb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="breadcrumb_content">
              <BreadCrumb title={title} />
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
