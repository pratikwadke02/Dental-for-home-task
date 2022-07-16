import React from 'react'
import {BsFillShareFill} from 'react-icons/bs'
import './Section.css'

const Section = (props) => {
  return (
    <>
    <div className="row_flex section_card">
        <div className="section_img">
            <img src={props.image} alt="image" height={70} width={110} style = {{borderRadius: '20px'}} />
        </div>
        <div className="col_flex section_card_details">
            <div>
            {props.desc}
            </div>
            <div className='row_flex'>
            <div>
            {props.dateTime}
            </div>
            <div>
            <BsFillShareFill />
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Section