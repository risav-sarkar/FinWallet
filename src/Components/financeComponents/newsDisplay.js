const NewsDisplay = ({ title, image, link, author, source }) => {
  return (
    <a className="news" href={link} target="_blank" rel="noreferrer">
      <img src={image} alt="logo" />
      <div className="textContainer">
        <h1>{title.substring(0, title.lastIndexOf("-"))}</h1>
        <div className="footer">
          {source ? <p>{source}</p> : null}
          {author ? <p>{author}</p> : null}
        </div>
      </div>
    </a>
  );
};

export default NewsDisplay;
