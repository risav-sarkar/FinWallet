import { useState, useEffect } from "react";
import NewsDisplay from "./newsDisplay";

const News = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/search?q=investments&country=in&lang=en&token=00f844286fd6d5a871cd6bac1a9d7c79"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.articles);
      });
  }, []);

  console.log(article);
  if (article) {
    return (
      <div className="newsContainer">
        {article.map((item, index) => {
          return (
            <NewsDisplay
              key={index}
              title={item.title}
              image={item.image}
              link={item.url}
              source={item.source.name}
              desc={item.description}
              date={item.publishedAt}
            />
          );
        })}
      </div>
    );
  } else
    return (
      <div className="newsContainer">
        <h1>No Data</h1>
      </div>
    );
};

export default News;
