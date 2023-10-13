// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alert from './components/alert.js';

const name="teju";
function App() {
  
  return (
    <>
    {/* only one tag can be returned normally
    for example only div tag and inside elemenets can be returned 
    if u wanted several other tags to be returned use <> at beggining and </> at end
    <> is called jsx fragment */}
    {/* <h1>hello world {name}</h1> */}
    {/* curly brackket inside variable */}
 

    
    <Alert/>
    <Navbar text1="textutils" text2=" this"  />
    <Textform title='text box'/>
    </>
  );

}

export default App;

