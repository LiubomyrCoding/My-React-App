import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function HeaderFooter({ variant }) {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
      <Container>
        {variant !== 'footer' && (
          <Navbar.Brand href="https://x.com" target="_blank"><button className="post">X post</button></Navbar.Brand>
        )}
        {variant == "footer" && (
          <Navbar>
            <Navbar.Brand className='el' href="#home">Created by Paul Hallett Maintained by Juriy Bura ©2026</Navbar.Brand>
         </Navbar>
         )}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
           <Navbar>
             {variant !== "footer" && (
          <Navbar>
            <Navbar.Brand className='el' href="#home">Navbar</Navbar.Brand>
            <Navbar.Brand className='el' href="#home">Home</Navbar.Brand>
            <Navbar.Brand className='el' href="#features">Features</Navbar.Brand>
            <Navbar.Brand className='el' href="#pricing">Pricing</Navbar.Brand>
         </Navbar>
         )}
         {variant == "footer" && (
          <div>
          <Navbar.Brand href="https://x.com" target="_blank"><button className="post">X post</button></Navbar.Brand>
          <Navbar.Brand href="https://x.com" target="_blank"><button className="post2">Follow @juriy</button></Navbar.Brand>
          </div>
         )}
      </Navbar>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}