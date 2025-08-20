import {CardWrapper, flexStyles} from "../style/cardWrapper";

import Card from "../components/Card";
import Carousel from 'react-bootstrap/Carousel';
import CardImage from '../components/cardImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
<>
  <Container>
    <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <Button variant="flat" size="xxl">
        Get Started
      </Button>
        </Col>
    </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
        
<Carousel>
      <Carousel.Item>
        <CardImage text="img-1" height="300px" width="100%" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CardImage text="img-2"  height="300px" width="100%"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CardImage text="img-3"  height="300px" width="100%"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         </Col>
      
      </Row>
       <Row>
        <Col md={{ span: 10, offset: 1 }}>
        
        <div className="alert alert-info" role="alert">
  <blockquote className="blockquote text-center">
  <p class="mb-3 display-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
</div>
      
        </Col>
    </Row>
    </Container>
 <div>

     </div>
</>

  )
}


export default Home
