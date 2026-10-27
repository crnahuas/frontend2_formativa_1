export default function PageBanner({ title, description, image, alt }) {
  return (
    <div className="page-banner">
      <div className="page-banner-inner">
        <div className="page-banner-copy">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <img src={image} alt={alt} width="1400" height="1050" />
      </div>
    </div>
  );
}
