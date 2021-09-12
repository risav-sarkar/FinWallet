const NewsDisplay = ({ title, image, link, desc, source, date }) => {
  return (
    <a className="news" href={link} target="_blank" rel="noreferrer">
      <img src={image} alt="logo" />

      <div className="textContainer">
        <div className="footer">
          {source ? <p>{source}</p> : null}
          {date ? <p>{date.substring(0, 10)}</p> : null}
        </div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </a>
  );
};

export default NewsDisplay;
