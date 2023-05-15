import React from 'react'
import "./TaxbuddyServices.scss"
import Bg from '../../UI_elements/BG_gradiant/Bg'
import Button from '../../UI_elements/Button/Button'
import S1 from "../../../medias/Screen1.svg"
import S2 from "../../../medias/Screen2.svg"
import S3 from "../../../medias/Screen3.svg"

const TaxbuddyServices = () => {
    return (
        <Bg section={2}>
            <div className="ts_main">
                <div className='left'>
                    <div className='content'>
                        <div className='label'>What you can do with TaxBuddy</div>
                        <div className='title'>Plan your tax</div>
                        <div className='desc'>You can keep track of all your income and expenses throughout the year, which can make filing your taxes much easier.</div>
                        <Button name="Start Planing" />
                    </div>
                </div>
                <div className='right'>
                    <div className='content'>
                        <div className='two_images'>
                            <img src={S1}></img>
                            <img src={S3}></img>
                        </div>
                        <img className='over_head_img' src={S2}></img>
                    </div>
                </div>
            </div>
        </Bg>
    )
}

export default TaxbuddyServices