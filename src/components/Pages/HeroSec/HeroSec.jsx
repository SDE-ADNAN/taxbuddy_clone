import "./HeroSec.scss";
import Lines from "../../../medias/lines.svg"
import Logo from "../../../medias/logo.svg"




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
                </div>
            </div>

        </div>
    )
}


export default HeroSec;