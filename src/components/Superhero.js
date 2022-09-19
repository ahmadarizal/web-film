import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/image/superhero/antman.jpg"
import batmanImage from "../assets/image/superhero/batman.jpg"
import avenggersImage from "../assets/image/superhero/avenggers.jpg"
import robinhootImage from "../assets/image/superhero/robinhoot.jpg"
import spidermenImage from "../assets/image/superhero/spidermen.jpg"
import supermenImage from "../assets/image/superhero/superman.jpg"
const Superhero = () => {
    return (
      <div>
          <Container>
              <br/>
              <h1 className="text-white">SUPERHERO MOVIES</h1>
              <br/>
            <Row>
              <Col md={4} className="movieWrapper" id="superhero">
                <Card className="movieImage">
                  <Image 
                    src={antmanImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">ANTMAN</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with natural lead-in to
                      additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                      </div> 
                    </div>
                 </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                  <Image 
                    src={batmanImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">BATMAN</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with natural lead-in to
                      additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                      </div> 
                    </div>
                 </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                  <Image 
                    src={avenggersImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">AVANGGERS</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with natural lead-in to
                      additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                      </div> 
                    </div>
                 </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                  <Image 
                    src={robinhootImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">ROBINHOOD</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with natural lead-in to
                      additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                      </div> 
                    </div>
                 </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                  <Image 
                    src={spidermenImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">SPIDERMAN</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with natural lead-in to
                      additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                      </div> 
                    </div>
                 </Card>
               </Col>
               <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                  <Image 
                    src={supermenImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">SUPERMAN</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with natural lead-in to
                      additional content.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                      </div> 
                    </div>
                 </Card>
               </Col>
             </Row>
           </Container>
      </div>
    )
}

export default Superhero