import HeroSec from "./components/Pages/HeroSec/HeroSec";
import Navbar from "./components/Pages/Navbar";
import "./styles.scss";
import GoogleFontLoader from "react-google-font-loader";

export default function App() {


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
            weights: [300, 400, 500, 600,700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      {/* <Navbar/> */}
      <HeroSec/>

    </div>
  );
}
