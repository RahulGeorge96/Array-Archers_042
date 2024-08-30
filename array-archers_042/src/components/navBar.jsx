import "./navBar.css"
import logoimage from "../assets/brandlogo.png"
import { useState , useEffect} from "react"
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"

export const NavBar = ()=>{
  let [opened, setOpened] = useState(false)
  let [topopened, setToppened] = useState(false)
  const [isBlurred, setIsBlurred] = useState(false);
  let navigate = useNavigate()
  let userlogged = useSelector((state)=>state.isLoggedIn)

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

  function handleImageClick (){
    navigate("/")
    setToppened(!topopened)
  }

  function handleCart (){
    navigate("/cart")
    setToppened(!topopened)
  }

  function handleSignin (){
    navigate("/login")
    setToppened(!topopened)
  }

  function handleBikes (){
    navigate("/bikes")
    setOpened(!opened)
  }

  function handleJackest (){
    navigate("/jackets")
    setOpened(!opened)
  }

  function handleHelmets (){
    navigate("/helmets")
    setOpened(!opened)
  }

  function handleGloves (){
    navigate("/gloves")
    setOpened(!opened)
  }

  function handleImageClicksecond (){
    navigate("/")
    setOpened(!opened)
  }
  
  return (
    <div className={`maincontainer ${isBlurred ? 'blur' : ''}`}>
      <div className="navbarcontainer">
        {/* ---------------------top most navbar------------------------ */}
        <div className="firstnavbar">
          <div>
            <img onClick={()=>{navigate("/")}} className="navbarlogo" src={logoimage} />
          </div>
          <div>
            <div><h4 style={{fontWeight:"600"}}>HARLEY</h4></div>
            <div className="bordertype"></div>
            <div><h4 style={{fontWeight:"600"}}>DAVIDSON</h4></div>
          </div>
          <div id="linksofcomp" className="linksofcomp">
            <p>Wishlist</p>
            <p onClick={()=>{navigate("/cart")}}>Cart</p>
            <p onClick={()=>{navigate("/login")}}>{userlogged ? "Sign Out" : "Sign in"}</p>
          </div>

          <div id="bergmenutop" className="bergmenutop">
            <p>{topopened ? <i onClick={()=>{setToppened(!topopened)}} className="ri-close-large-line"></i> : <i onClick={()=>{setToppened(!topopened)}} className="ri-menu-4-line"></i>}</p>
          </div>

          <div id={topopened ? "openthetopisebar" : "closethetopsidebar"}>
            <img onClick={handleImageClick} src={logoimage} className="navbarlogo" />
            <p onClick={()=>{setToppened(!topopened)}} >Wishlist</p>
            <p onClick={handleCart} >Cart</p>
            <p onClick={handleSignin} >Sign in</p>
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
            <p onClick={()=>{navigate("/bikes")}}>Bikes</p>
            <p onClick={()=>{navigate("/jackets")}}>Jackets</p>
            <p onClick={()=>{navigate("/helmets")}}>Helmets</p>
            <p onClick={()=>{navigate("/gloves")}}>Gloves</p>
          </div>

          <div id="contactbutt">
            <p>Contact Us</p>
            <p>About</p>
          </div>

          <div id="bergmenu" className="bergmenu">
            <p>{opened ? <i onClick={()=>{setOpened(!opened)}} className="ri-close-large-line"></i> : <i onClick={()=>{setOpened(!opened)}} className="ri-menu-4-line"></i>}</p>
          </div>

          <div id={opened ? "opentheisebar" : "closethesidebar"}>
            <img onClick={handleImageClicksecond} src={logoimage} className="navbarlogo" />
            <p onClick={handleBikes} >Bikes</p>
            <p onClick={handleJackest} >Jackets</p>
            <p onClick={handleHelmets} >Helmets</p>
            <p onClick={handleGloves} >Gloves</p>
            <p onClick={()=>{setOpened(!opened)}} >Contact Us</p>
            <p onClick={()=>{setOpened(!opened)}} >About</p>
          </div>

        </div>

        {/* ---------------------top second navbar------------------------ */}

      </div>
    </div>
  )
}