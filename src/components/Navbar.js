// import PropTypes from 'prop-types'
// always components name shd be capital
import React ,{useState} from 'react'
// i wrote rfc for entire thing to come
/* hr tag didnt close so i added / before >
            change class to className
            use crtl+f for replace every class
            replace href="/"*/
export default function Navbar(props) {
  const[myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
})
const[btnText, setBtnText] = useState("Enable Dark mode");
const toogleStyle = () => {
    if (myStyle.color === "black") {
        setMyStyle({
            color: "white",
            backgroundColor: "black",
            border: "1px solid white",
          })
          setBtnText("Enable Light Mode")}
    else {
          setMyStyle({
              color: 'black',
              backgroundColor: 'white'
          })
          setBtnText("Enable Dark Mode")
      }
    }

  return (
    <>
    <div>
    <nav>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={myStyle}>
  <div className="container-fluid"style={myStyle}  >
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={myStyle} >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={myStyle}>
        <li className="nav-item" style={myStyle}>
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item" style={myStyle}>
          <a className="nav-link"  href="/">About</a>
        </li>
        {/* <button onClick={toogleStyle} type="button" className="btn btn-primary"> {btnText}</button> */}
        
      </ul>
      
    </div>
  </div>
</nav>
     
    </nav>
    </div>
    </>   
  );
}

// Navbar.propTypes={text:PropTypes.string,text2:PropTypes.string.isRequired}
//  It means that my prop-type of title is a string which means on passing any other value, 
// like Number, it will show an error in the console. Hence we can only pass a string in props.title 
// and props.aboutText. We can use ‘isrequired’ keyword, which makes sure that we won’t leave that
//  prop blank. 

// Navbar.defaultProps={
//     text:'works in case u didnt pass anything'
// };
