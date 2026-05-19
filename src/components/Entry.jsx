import FlagImg from "../assets/flag.png";

function Entry({ item }) {
  return (
    <>
      <article className="article">
        <div className="img-container">
          <img src={item.img.src} alt={item.img.alt} />
        </div>
        <div className="content-container">
          <div className="location">
            <img src={FlagImg} alt="Flag Img" />
            <p>{item.country}</p>
            <a href={item.googleMapsLink}>View On Google Maps</a>
          </div>
          <h1 className="content-title">{item.title}</h1>
          <div className="dates">
            <p>{item.dates}</p>
          </div>
          <p>{item.text}</p>
        </div>
      </article>
    </>
  );
}

export default Entry;
