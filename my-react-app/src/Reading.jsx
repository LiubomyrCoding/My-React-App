import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Reading() {

return (
<div className='info-container'>

  <div className="center">
  <p className='info'>All the Star Wars data you've ever wanted: <br />
      <b>Planets, Spaceships, Vehicles, People, Films and Species <br /></b>
       From all <b>SEVEN</b> Star Wars films <br />
         <b>Now with The Force Awakens data!</b></p>
         </div>

   <hr />

  <div className='search-title-container'>
    <h1 className='search-title'>Try it now!</h1>
  </div>

   <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='serach-http'>https://swapi.dev/api/</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="people/1/"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">request</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  
)
}

export default Reading