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
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
    </div>
  );
}
