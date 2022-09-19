import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/image/trending/dune.jpg"
import morbiusImage from "../assets/image/trending/morbius.jpg"
import startrekImage from "../assets/image/trending/startrek.jpg"
import everythingImage from "../assets/image/trending/everything.jpg"
import infinetestormImage from "../assets/image/trending/infinetestorm.jpg"
import jokerImage from "../assets/image/trending/joker.jpg"
const Trending = () => {
    return (
      <div>
          <Container>
              <br/>
              <h1 className="text-white">TERNDING MOVIES</h1>
              <br/>
            <Row>
              <Col md={4} className="movieWrapper" id="trending">
                <Card className="movieImage">
                  <Image 
                    src={duneImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">DUNE</Card.Title>
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
                    src={morbiusImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">MORBIUS</Card.Title>
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
                    src={startrekImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">STARTREK</Card.Title>
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
                    src={everythingImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">EVERYTHING</Card.Title>
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
                    src={infinetestormImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">INFINETESTORM</Card.Title>
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
                    src={jokerImage} 
                    alt="Dune Movies"
                    className="images"
                    />
                    <div className="bg-dark ">
                      <div className="p-2 m-1 text-white"> 
                    <Card.Title className="text-center">JOKER</Card.Title>
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

export default Trending