import herobikeimageImage from "../../assets/herobikeimage.png"
import grossImage from "../../assets/360gross.png"
import "./herosection.css"

export const HeroSection = ()=>{
  return (
    <>
    <div className="herosectioncontainer" id="herosectioncontainer">
      <div className="textformain">
        <h2 id="textformainsp" className="textformainsp">SPORSTERS</h2>
      </div>
      <div className="bikeimage">
        <img className="bikeimagess" src={herobikeimageImage} />
      </div>
      <div className="roundimage">
        <img src={grossImage}/>
      </div>
      <div className="bottomborder"></div>
    </div>




    <div className="forthefirsttextandp">
      <div>
        <h2>MODEL</h2>
        <p>SPORSTER* S</p>
      </div>
      <div>
        <h6>YEAR</h6>
        <p>2022</p>
      </div>
      <div>
        <h6>COLOR OPTION</h6>
        <p>VIVID BLACK</p>
      </div>
      <div>
        <p id="purchasebtn">PURCHASE</p>
      </div>
    </div>


    <div className="forthesecondtextandp">
      <div>
        <h2>FROM</h2>
        <p>$15,499</p>
      </div>
      <div>
        <h6>CATEGORY</h6>
        <p>SPORT</p>
      </div>
      <div>
        <h6>ENGINE</h6>
        <p>REVOLUTION* MAX</p>
      </div>
      <div>
        <p id="estimatebtn">Estimate payments</p>
      </div>
    </div>





    </>
  )
}