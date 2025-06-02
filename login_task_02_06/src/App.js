import logo from './logo.svg';
import './App.css';
import img from './Mobile login-rafiki.png';

function App() {
  return (
    <div className='sm-1'>
      <div style={{display: "flex"}}>
        <h1 style={{color: "#3362cc"}}>Un</h1><h1>Graduation</h1>
      </div>
        <div className='container'> 
          <div className='image_container'>
            <img src={img} alt="login storyset" className='image_size'/>  
          </div>
          <div className='login_form'>
            <h1 style={{gridColumn: "1 / span 2", display: "flex", justifyContent: "center", backgroundColor: "white"}}>login</h1>
            <input type="text" placeholder="Enter your email" style={{gridColumn: "1 / span 2"}} className='input_style'/>
            <input type="password" placeholder="Enter your password" style={{gridColumn: "1 / span 2"}} className='input_style'/>
             <a href="#" style={{gridColumn: "2 / span 2"}} className='link_style'>forgot password?</a>
            <div style={{gridColumn: "1 / span 2", display: "flex", justifyContent: "center", backgroundColor: "white"}}>
              <button className='button_style'>Login</button>
            </div>
            <p style={{gridColumn: "1 / span 2", display: "flex", justifyContent: "center",backgroundColor: "white"}}>Don't have an account? <a href="#" className='link_style'>Sign Up</a></p>
          </div>
        </div>  
    </div>
  );
}

export default App;
