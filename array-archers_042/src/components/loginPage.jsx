import "./loginPage.css"

export const LoginPage = ()=>{

  return (
    <div className="loginpagecom">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form>
          <h3>Login Here</h3>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button>Log In</button>
          <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"15px", fontSize:"14px"}}>
            <p>Don't have an account? <span style={{color:"blue", cursor:"pointer"}}>register here</span></p>
          </div>
          <div className="social">
            <div style={{cursor:"pointer"}} className="go"><i className="fab fa-google" />  Google</div>
            <div style={{cursor:"pointer"}} className="fb"><i className="fab fa-facebook" />  Github</div>
          </div>
        </form>
      </div>
  )
}