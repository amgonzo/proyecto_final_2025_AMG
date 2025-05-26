import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <Row>
          <Col style={{textAlign:"left"}}>
            <p><b>ASISTENCIA</b><br/>
            Dudas Frecuentes<br/>
            Realizar Pedidos<br/>
            Devoluciones<br/>
            Guia de Tallas</p>
          </Col>
          <Col style={{textAlign:"left"}}>
            <p><b>INFORMACIÓN DE LA EMPRESA</b><br/>
            Trabaja en Nuestro Equipo<br/>
            Prensa<br/>
            Información Corporativa<br/>
            TIENDAS</p>
          </Col>
          <Col>
          <p><b>SÍGUENOS</b><br/>
          <FontAwesomeIcon icon={faFacebookF} /><br/>
          <FontAwesomeIcon icon={faInstagram} /><br/>
          <FontAwesomeIcon icon={faXTwitter} /><br/>
          <FontAwesomeIcon icon={faTiktok} /><br/>
          <FontAwesomeIcon icon={faYoutube} />
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;