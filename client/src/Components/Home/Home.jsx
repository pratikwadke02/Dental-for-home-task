import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Article from '../Article/Article'
import ArticleHeader from '../ArticleHeader/ArticleHeader'
import SideArticle from '../Article/SideArticle'
import { images } from '../../constants'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="body">
        <div className="row_flex">
            <div className="container_left">
                <Header />
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
            <div className="container_right">
                <img src={images.banner} alt="" style = {{borderRadius: "20px"}} />
                <SideArticle />
                <SideArticle />
            </div>
        </div>
    </div>
    </>
  )
}

export default Home