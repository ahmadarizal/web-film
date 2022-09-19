import { Col, Container, Row} from "react-bootstrap" 
const intro = () => {
    return (
        <div className="intro">
        <Container className="text-white d-flex justify-content-center 
        align-items-center">
          <Row>
            <Col>
              <div className="title">NONTON GRATIS </div>
              <div className="title">GAK PEKE TIKET</div>
              <div className="introButton mt-4 text-center">
                {/* <button variant="dark">Lihat Semua List</button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default intro