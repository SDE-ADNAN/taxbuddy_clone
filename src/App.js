import HeroSec from "./components/Pages/HeroSec/HeroSec";
import "./styles.scss";
import GoogleFontLoader from "react-google-font-loader";
import logos from "./medias/brand-logos.svg"
import StatsSec from "./components/Pages/StatsSec/StatsSec";

export default function App() {

const BrandLogos =()=> <div className="brand_logo">
<img src={logos}></img>
<div className="matrix_left"></div>
<div className="matrix_right"></div>
</div>

  return (
    <div className="main">
       <GoogleFontLoader
        fonts={[
          {
            font: "Signika",
            weights: [300, 400, 500, 600],
          },
          {
            font: "DM Sans",
            weights: [100 , 200 ,300, 400, 500, 600,700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <HeroSec/>
      <BrandLogos/>
      <StatsSec/>
    </div>
  );
}
