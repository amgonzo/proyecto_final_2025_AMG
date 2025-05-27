import { Navbar } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import Image from 'react-bootstrap/Image';


function Header(){

    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Image src="logo.png" style={{height:"3em"}} />
                
                <Navbar.Brand>Shoppineando</Navbar.Brand>
                
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Text className="ms-auto">
                </Navbar.Text>
            </Container>
        </Navbar>
        </>
    )
}
export default Header;