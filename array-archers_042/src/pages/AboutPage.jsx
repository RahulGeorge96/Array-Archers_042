import { Stay } from "../components/Stay";
import aboutImage1 from "../assets/aboutBike1.png";
import aboutImage2 from "../assets/aboutBike2.png";
import aboutImage3 from "../assets/aboutBike3.png";

export const AboutPage = () => {
  return (
    <div
      style={{
        marginTop: "150px",
        border: "1px solid black",
        maxWidth: "1360px",
        margin: "0 auto",
        backgroundColor: "#303030",
        height: "100%",
      }}
    >
      <div className="About_grid">
        <div className="About_grid_div">
          <img
            style={{ height: "100%", objectFit: "cover" }}
            src={aboutImage1}
            alt="Bike image"
          />
        </div>
        <div className="About_grid_div">
          <img
            style={{ height: "100%", objectFit: "contain" }}
            src={aboutImage2}
            alt="Bike image"
          />
        </div>
        <div className="About_grid_div">
          <img
            style={{ height: "100%", objectFit: "contain" }}
            src={aboutImage3}
            alt="Bike image"
          />
        </div>
        <div className="About_grid_div">
          <p style={{ fontSize: "0.6rem" }}>
            In 1903, out of a small shed in Milwaukee, Wisconsin, four young men
            lit a cultural wildfire that would grow and spread across
            geographies and generations. <br />
            <br />
            Their innovation and imagination for what was possible on two wheels
            sparked a transportation revolution and lifestyle that would make
            Harley-Davidson the most desirable motorcycle and lifestyle brand in
            the world.
            <p>read more</p>
          </p>
        </div>
        <div className="About_grid_div">
          <p style={{ fontSize: "0.6rem" }}>
            Today we continue to define motorcycle culture and lifestyle,
            evoking soul-stirring emotion reflected in every product and
            experience we deliver, like we have for over a century and will for
            generations to come.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Stay />
    </div>
  );
};
