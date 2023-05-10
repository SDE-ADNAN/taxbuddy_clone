import "./HeroSec.scss";
import Lines from "../../../medias/lines.svg"
import Logo from "../../../medias/logo.svg"
import Vector from "../../../medias/Vector.svg"




const HeroSec = (props) => {
    return (
        <div className="hero__main">
            <div className="lines_img">
                <img src={Lines}></img>
            </div>
            <div className="elipse"></div>
            <div className="content_main_div">
                <div className="nav__main">
                    <img src={Logo}></img>
                    <div className="nav__ser_pri">
                        <div className="services"> <div className="text">Services</div>
                            <img className="icon" src={Vector}></img></div>
                            <div className="pricing">Pricing</div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}


export default HeroSec;