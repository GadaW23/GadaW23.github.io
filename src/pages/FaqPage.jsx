import {Container, Col, Row, Accordion} from 'react-bootstrap'
import { faq } from '../data/index'

const FaqPage = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
          <h2 className='text-center fw-bold'>Pertanyaan</h2>
          </Col>
          </Row>
          <Row className='row-cols-lg-2 row-cols-1 pt-5 g-4'>
            {faq.map((data) => {
              return (
          <Col className='p-2 abc' key={data.id}>
              <Accordion className='shadow-sm'>
              <Accordion.Item eventKey={data.eventKey}>
              <Accordion.Header>{data.title}</Accordion.Header>
              <Accordion.Body>{data.desc}</Accordion.Body>
              </Accordion.Item>
              </Accordion>
          </Col>
              )
            })}     
          </Row>
      </Container>
    </div>
  )
}

export default FaqPage