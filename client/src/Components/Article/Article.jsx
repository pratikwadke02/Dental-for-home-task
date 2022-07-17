import React from "react";
import { useSelector } from "react-redux";
import { images } from "../../constants";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import Section from "../Section/Section";
import "./Article.css";

const Article = () => {

  const articles = (useSelector(state => state.articles.articlesData)[0]);

  return (
    <>
      <div className="article_header_container">
        <ArticleHeader topic={articles.title} />
      </div>
      <div className="article_container">
        <div className="row_flex">
          <div className="col_flex">
            <div className="row_flex">
              <div className="section">
              <Section
                  desc={articles.desc}
                  date={articles.date}
                  time={articles.time}
                  image={articles.image}
                />
               <Section
                  desc={articles.desc}
                  date={articles.date}
                  time={articles.time}
                  image={articles.image}
                />
                <Section
                  desc={articles.desc}
                  date={articles.date}
                  time={articles.time}
                  image={articles.image}
                />
                <Section
                  desc={articles.desc}
                  date={articles.date}
                  time={articles.time}
                  image={articles.image}
                />
              </div>
              <div className="section">
                <div className="article_banner">
                  <img
                    src={images.yoga}
                    alt=""
                    height={230}
                    width={600}
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <Section
                  desc={articles.desc}
                  date={articles.date}
                  time={articles.time}
                  image={articles.image}
                />
                <Section
                  desc={articles.desc}
                  date={articles.date}
                  time={articles.time}
                  image={articles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
