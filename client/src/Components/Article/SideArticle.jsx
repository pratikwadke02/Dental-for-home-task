import React from "react";
import { images } from "../../constants";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import Section from "../Section/Section";
import './Article.css';
import { useSelector } from "react-redux";

const SideArticle = () => {

  const articles = (useSelector(state => state.articles.articlesData)[0]);

  return (
    <>
    <div className="side_article_container">
        <div className="col_flex">
        <div className="section">
            <ArticleHeader topic={articles.title} />
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
        <div className="side_article_banner">
            <img src={images.banner} alt="" style={{borderRadius: "20px"}} height={400} width={400} />
        </div>
        </div>
    </div>
    </>
  )
}

export default SideArticle
