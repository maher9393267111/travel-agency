const BreadCrumb = ({ title = "" , country='country' ,subTitle }) => {
  return (
    <>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">{ subTitle ? subTitle : country}</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {title}
        </li>
      </ol>
    </>
  );
};

export default BreadCrumb;
