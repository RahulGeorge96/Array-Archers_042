import "./feauturePage.css"
import riderwithbike2 from "../../assets/riderwithbike2.png"

export const FeauturesPage = ()=>{
  return (
    <>
      <div className="feauturedpagecontainer">
        <h2>FEATURES</h2>
        <div className="secondcontainerofmainconatiner">

          <div className="textwithalldetails">
            <div>
              <p>POWERTRAIN</p>
            </div>
            <div>
              <p>EXHAUST</p>
            </div>
            <div>
              <p>INSTRUMENTATION</p>
            </div>
            <div>
              <p>RIDER TECHNOLOGY</p>
            </div>
            <div>
              <p>CHASSIS</p>
            </div>
            <div>
              <p>CUSTOMIZATION</p>
            </div>
          </div>


          <div className="textwithridemode">
            <p>CHOOSE YOUR RIDE MODE</p>
            <p>Flick a switch and choose from 3 pre-programmed Ride Modes (Sport, Road, and Rain) or create your own custom mode - tuning your bike with a specific combination of power delivery, engine braking, Cornering Enhanced Antilock Braking System (C-ABS) and Cornering Enhanced Traction Control System (C-TCS) settings.</p>
          </div>


          <div className="riderwithbikeimageoff">
            <img src={riderwithbike2} />
          </div>


        </div>
      </div>
    </>
  )
}