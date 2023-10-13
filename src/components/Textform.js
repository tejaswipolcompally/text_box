import React,{useState} from 'react'
// use state is a hook:it helps to use features of a class without class

export default function Textform(props) {
    const[text,setText]=useState("enter ur input here");
    // setText('abcdf');
    // setText is used for updating text
    // text default value is enter ur input here
   
      const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const[btnText, setBtnText] = useState("Enable Dark mode");
    const toogleStyle = () => {
      let x = document.getElementById('root')
        if (myStyle.color === "black") {
          
          x.style.backgroundColor='black'
          x.style.height='100%'
          x.style.width='100%'
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
               
              })
              setBtnText("Enable Light Mode")}
        else {
          x.style.backgroundColor='white'
          x.style.height='100%'
          x.style.width='100%'
              setMyStyle({
                  color: 'black',
                  backgroundColor: 'white'
              })
              setBtnText("Enable Dark Mode")
          }
        }
    
    function k1(){
        console.log('you have clicked on the button');
        let newt=text.toUpperCase()
        setText(newt);
    }

    function k2(){
      console.log('you have clicked on the button');
      let newt=text.toLowerCase()
      setText(newt);
  }
  function k3(){
   let x= prompt('enter the word to be replaced');
   let y= prompt('enter the new word');
    let newt=text.replace(x,y)
    setText(newt);
}
  function copy(){
    let k=document.getElementById('exampleFormControlTextarea1')
    k.select()
    // select() method selects all the text in a <textarea> element or in an <input> element that includes a text field
    navigator.clipboard.writeText(k.value)
    // The value property sets or returns the value of the value attribute of a text field.
  }
    function l(event){
        setText(event.target.value);
    }
    
  return (
    <>
<div className="myclass" style={myStyle}>
    <h1>{props.title}</h1>
  <label for="exampleFormControlTextarea1" className="form-label">Example text area -{text}</label>
  <textarea className="form-control"  id="exampleFormControlTextarea1" value={text} onChange={l} rows="10"></textarea>
  <button className="btn btn-primary mx-2" onClick={k1}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={k2}>Convert to Lowercase</button>
  <button className="btn btn-primary" onClick={k3}>replacing words</button>
  <button className="btn btn-primary" onClick={copy}>copy to clipboard</button>
  <button onClick={toogleStyle} type="button" className="btn btn-primary"> {btnText}</button>
</div>
<div className='container'>
  <h5>The number of words in the text area is {text.split(' ').filter((element)=>{return element.length!==0}).length} and characters is {text.length} </h5>
{/* if u split a="" u will get length 1 so even if u typed 0 words it shows 1  */}
<h5>The time taken for each word to read is {0.008 *text.split('').length}  minutes</h5>
</div>

</>
  )
}
