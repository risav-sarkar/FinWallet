import axios from "axios";
import { useState, useEffect } from "react";
import NewsDisplay from "./newsDisplay";

const News = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5c262bee863c4a30aff57ecfcf0f15b4"
      )
      .then((res) => {
        setArticle(res.data["articles"]);
      })
      .catch((error) => console.log(error));
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
              image={item.urlToImage}
              link={item.url}
              author={item.author}
              source={item.source.name}
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
