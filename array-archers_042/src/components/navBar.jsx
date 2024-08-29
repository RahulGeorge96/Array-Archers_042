import "./navBar.css"
import logoimage from "../assets/brandlogo.png"
import { useState , useEffect} from "react"

export const NavBar = ()=>{
  let [opened, setOpened] = useState(false)
  let [topopened, setToppened] = useState(false)
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  return (
    <div className={`maincontainer ${isBlurred ? 'blur' : ''}`}>
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
          <div id="linksofcomp" className="linksofcomp">
            <p>Wishlist</p>
            <p>Cart</p>
            <p>Sign in</p>
          </div>

          <div id="bergmenutop" className="bergmenutop">
            <p>{topopened ? <i onClick={()=>{setToppened(!topopened)}} class="ri-close-large-line"></i> : <i onClick={()=>{setToppened(!topopened)}} class="ri-menu-4-line"></i>}</p>
          </div>

          <div id={topopened ? "openthetopisebar" : "closethetopsidebar"}>
            <img src={logoimage} className="navbarlogo" />
            <p onClick={()=>{setToppened(!topopened)}} >Wishlist</p>
            <p onClick={()=>{setToppened(!topopened)}} >Cart</p>
            <p onClick={()=>{setToppened(!topopened)}} >Sign in</p>
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
            <p>{opened ? <i onClick={()=>{setOpened(!opened)}} class="ri-close-large-line"></i> : <i onClick={()=>{setOpened(!opened)}} class="ri-menu-4-line"></i>}</p>
          </div>

          <div id={opened ? "opentheisebar" : "closethesidebar"}>
            <img src={logoimage} className="navbarlogo" />
            <p onClick={()=>{setOpened(!opened)}} >Bikes</p>
            <p onClick={()=>{setOpened(!opened)}} >Jackets</p>
            <p onClick={()=>{setOpened(!opened)}} >Helmets</p>
            <p onClick={()=>{setOpened(!opened)}} >Gloves</p>
            <p onClick={()=>{setOpened(!opened)}} >Contact Us</p>
            <p onClick={()=>{setOpened(!opened)}} >About</p>
          </div>

        </div>

        {/* ---------------------top second navbar------------------------ */}

      </div>
    </div>
  )
}