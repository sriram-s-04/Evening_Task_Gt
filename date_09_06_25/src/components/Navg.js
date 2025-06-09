import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Home.css'


const Navg = () => {
return (
    <div style={{display: 'flex', height: '100vh'}}>

         <Navbar bg="light" expand="lg" >   
          <Container >
             <Navbar.Brand href="#home">AMAZON</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav" style={{flexDirection: 'column'}} >
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
             </Navbar.Collapse>
             <Navbar.Collapse id="basic-navbar-nav" style={{flexDirection: 'column'}} >
                <Nav className="me-auto">
                  <Nav.Link href="#home">Products</Nav.Link>
                </Nav>
             </Navbar.Collapse>
             <Navbar.Collapse id="basic-navbar-nav" style={{flexDirection: 'column'}} >
                <Nav className="me-auto">
                  <Nav.Link href="#home">Cart</Nav.Link>
                </Nav>
             </Navbar.Collapse>
             <Navbar.Collapse id="basic-navbar-nav" style={{flexDirection: 'column'}} >
                <Nav className="me-auto">
                  <Nav.Link href="#home">Add Product</Nav.Link>
                </Nav>
             </Navbar.Collapse>
          </Container>
            </Navbar>
    </div>
)   
}

export default Navg