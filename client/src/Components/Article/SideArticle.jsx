import React from "react";
import { images } from "../../constants";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import Section from "../Section/Section";
import './Article.css';

const SideArticle = () => {
  return (
    <>
    <div className="side_article_container">
        <div className="col_flex">
        <div className="section">
            <ArticleHeader topic="व्यापार" />
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
        <div className="side_article_banner">
            <img src={images.banner} alt="" style={{borderRadius: "20px"}} height={400} width={400} />
        </div>
        </div>
    </div>
    </>
  )
}

export default SideArticle
