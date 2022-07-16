import React from 'react'
import './ArticleHeader.css'

const ArticleHeader = (props) => {
  return (
    <>
    <div className="article_header_container">
        <div className="topic_outer_container">
            <div className="topic_inner_container">
                {props.topic}
            </div>
        </div>
        <div className="partition_container"></div>
    </div>
    </>
  )
}

export default ArticleHeader