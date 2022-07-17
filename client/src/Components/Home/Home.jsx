import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Article from '../Article/Article'
import SideArticle from '../Article/SideArticle'
import { images } from '../../constants'
import { getArticles } from '../../actions/articles'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }
  , [dispatch]);


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