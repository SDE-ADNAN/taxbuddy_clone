import React from 'react'
import "./CallToAction.scss"
import lady from "./Media/lady.png"
import star from "./Media/star.png"
import people from "./Media/people.png"
import check from "./Media/check.png"
import Footer from './Footer'

export const CallToAction = () => {
  return (
    <div>
      <div className='container_call_to_action'>
        <div className='gradient_1'></div>

        <img className='lady_icon' src={lady} title="lady" alt="lady" />

        <div className='gradient_2'></div>
        <div className='side_bar'>
          <div className='header_text'>Start your tax journey with us today</div>
          <div className='icons_list'>
            <div className='icon_list_items'><img src={star} alt="star" title="star" /> 4.9 Rating</div>
            <div className='icon_list_items'><img src={people} alt="people" title="people" /> 8 lakh+ Users</div>
            <div className='icon_list_items'><img src={check} alt="verified" title="verified" /> 200+ Tax experts</div>
          </div>
          <div className='input_window'>
            <input type="tel" placeholder='Enter your mobile number' pattern="[0-9]{10}" className='input' />
            <button type='submit' className='button'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
