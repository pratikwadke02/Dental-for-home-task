import React from "react";
import { useSelector } from "react-redux";
import { images } from "../../constants";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import Section from "../Section/Section";
import "./Article.css";

const Article = () => {

  const articles = useSelector(state => state.articles.articles);
  console.log(articles);

  return (
    <>
      <div className="article_header_container">
        <ArticleHeader topic="व्यापार" />
      </div>
      <div className="article_container">
        <div className="row_flex">
          <div className="col_flex">
            <div className="row_flex">
              <div className="section">
                <Section
                  desc="पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का अब..."
                  dateTime="Tue, 21 Jun 2022 04:35 PM"
                  image={images.section}
                />
                <Section
                  desc="पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का अब..."
                  dateTime="Tue, 21 Jun 2022 04:35 PM"
                  image={images.section}
                />
                <Section
                  desc="पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का अब..."
                  dateTime="Tue, 21 Jun 2022 04:35 PM"
                  image={images.section}
                />
                <Section
                  desc="पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का अब..."
                  dateTime="Tue, 21 Jun 2022 04:35 PM"
                  image={images.section}
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
                  desc="पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का अब..."
                  dateTime="Tue, 21 Jun 2022 04:35 PM"
                  image={images.section}
                />
                <Section
                  desc="पाक युवती के प्यार में सरहद पार कर गया फर्रुखाबाद का लड़का अब..."
                  dateTime="Tue, 21 Jun 2022 04:35 PM"
                  image={images.section}
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
