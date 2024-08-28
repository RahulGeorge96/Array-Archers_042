import "./navBar.css"
import logoimage from "../assets/brandlogo.png"

export const NavBar = ()=>{
  let opened = false
  return (
    <div className="maincontainer">
      <div className="navbarcontainer">
        {/* ---------------------top most navbar------------------------ */}
        <div className="firstnavbar">
          <div>
            <img className="navbarlogo" src={logoimage} />
          </div>
          <div>
            <div><h4 style={{fontWeight:"600"}}>HARLEY</h4></div>
            <div className="bordertype"></div>
            <div><h4 style={{fontWeight:"600"}}>DAVIDSON</h4></div>
          </div>
          <div className="linksofcomp">
            <p>Wishlist</p>
            <p>Cart</p>
            <p>Sign in</p>
          </div>
        </div>

        {/* ---------------------top most navbar------------------------ */}


        {/* ---------------------top most border of navbar------------------------ */}

        <div className="bottomborder"></div>

        {/* ---------------------top most border of navbar------------------------ */}


        {/* ---------------------top second navbar------------------------ */}

        <div className="secondnavbar">

          <div id="productsccc">
            <h4>Products</h4>
          </div>

          <div id="categoryofproduct">
            <p>Bikes</p>
            <p>Jackets</p>
            <p>Helmets</p>
            <p>Gloves</p>
          </div>

          <div id="contactbutt">
            <p>Contact Us</p>
            <p>About</p>
          </div>

          <div id="bergmenu" className="bergmenu">
            <p>{opened ? <i class="ri-close-large-line"></i> : <i class="ri-menu-4-line"></i>}</p>
          </div>

        </div>

      </div>
    </div>
  )
}