import "./detailedPage.css"
import HarleyDavidsonImage from "../../assets/HarleyDavidson.png"

import firstimageofbike from "../../assets/firstimageofbike.png"

import footcontrols from "../../assets/footcontrols.png"
import ridersafety from "../../assets/ridersafety.png"
import low from "../../assets/low.png"

export const DetailedPage = ()=>{
  return (
    <div className="detailedpagecontainer">


      <div className="imagewithbiker">
        <img src={HarleyDavidsonImage} />
      </div>

      <div className="sideofbikertext">
        <div className="sideofbikertextssss">
          <h4>DESCRIPTION</h4>
          <p>Sportster® S is the first chapter of a whole new
              book of the Sportster saga. A legacy born in 1957
              that outperformed the competition is now rebuilt
              to blow away the standards of today.</p>
          <p>Detailed Specs</p>
        </div>

        <div className="containerwithtwocontainer">
          <div>
            <img src={firstimageofbike}  />
            <p>STRETCHED RIDING POSITION</p>
          </div>

          <div>
            <img src={footcontrols}  />
            <p>FORWARD FOOT CONTROLS</p>
          </div>
        </div>

      </div>


      <div className="sideofbikertext">
        
        <div className="containerwithtwocontainer">
          <div>
            <img src={low}  />
            <p>LOW</p>
          </div>

          <div>
            <img src={ridersafety}  />
            <p>RIDER SAFTEY ENHANCEMENTS</p>
          </div>
        </div>

        <div className="sideofbikertextssss">
          <h4>THIS IS THE RIGHT BIKE FOR</h4>
          <p>Riders who desire top-of-the-line performance and
            stunning style. Aggressive riding with sport bike agility and handling. Making a statement and standing out from the crowd</p>
          <p>Compare This Bike</p>
        </div>

      </div>


    </div>
  )
}