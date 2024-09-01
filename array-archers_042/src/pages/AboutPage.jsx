import aboutImage1 from "../assets/aboutBike1.png";
import aboutImage2 from "../assets/aboutBike2.png";
import aboutImage3 from "../assets/aboutBike3.png";
import aboutImage4 from "../assets/aboutBike4.png";

export const AboutPage = () => {
  return (
    <div className="maincontainerofabout">
      <div className="aboutharleytext">
        <p>ABOUT HARLEY-DAVIDSON</p>
      </div>
      <div className="heroimagewithriderabout">
          <div>
            <img src={aboutImage1} />
          </div>


          <div>
            <div>
              <img style={{borderRadius:"8px",height:"195px", width:"100%"}} src={aboutImage2} />
            </div>
            <div>
              <p style={{marginBottom:"10px", marginTop:"5px"}}>In 1903, out of a small shed in Milwaukee, Wisconsin, four young men lit a cultural wildfire that would grow and spread across geographies and generations. </p>
              <p>Their innovation and imagination for what was possible on two wheels sparked a transportation revolution and lifestyle that would make Harley-Davidson the most desirable motorcycle and lifestyle brand in the world.</p>
              <p style={{fontSize:"14px", marginTop:"30px", padding:"5px 10px" , border:"1px solid white", borderRadius:"50px", display:"inline-block"}}>Read more</p>
            </div>
          </div>



          <div>
          <div>
              <img style={{borderRadius:"8px", height:"195px", width:"100%"}} src={aboutImage3} />
            </div>
            <div>
              <p style={{marginBottom:"10px", marginTop:"5px"}}> Today we continue to define motorcycle culture and lifestyle, evoking soul-stirring emotion reflected in every product and experience we deliver, like we have for over a century and will for generations to come. </p>
            </div>
          </div>
      </div>
      <div className="borderofaboutpage"></div>
      <div className="stayintouchwithwe">
        <div>
          <img src={aboutImage4} />
        </div>


        <div className="textandeverything">
          <p>STAY IN THE KNOW</p>
          <p>Subscribe to receive notifications about the latest news, events, presentations and more.</p>
          <input style={{outline:"none"}} type="email" placeholder="Email" />
          <p> <input type="checkbox" /> I have read the privacy policy and I agree to the processing of my personal data.</p>
          <button style={{border:"none" ,backgroundColor:"#fa6600", padding:"5px", borderRadius:"10px"}}>SIGN UP</button>
        </div>
      </div>
    </div>
    )
};
