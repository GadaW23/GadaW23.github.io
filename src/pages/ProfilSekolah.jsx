import { Container, Row, Col, Breadcrumb} from 'react-bootstrap'
import { testimonial } from '../data/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import FaqPage from './FaqPage'
import { useNavigate } from 'react-router-dom';

const ProfilSekolah = () => {
  let ProfilSekolah = useNavigate();
  return (
    <div className='testimonial-page'>
      <div className='testimonial'>
        <Container>
          <Row className='mb-5'>
            <Col md={10} className="offset-md-1">
            <Breadcrumb className="pt-5">
      <Breadcrumb.Item onClick={() => ProfilSekolah("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Berita</Breadcrumb.Item>
    </Breadcrumb>
            <h1 className='text-center fw-bold'> Semua Testimonial </h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in autem praesentium aperiam exercitationem sit.</p>
            </Col>
          </Row>
          <Row className='row-cols-lg-3 row-cols-1'>
          {testimonial.map((data) => {
          return ( 
          <Col key={data.id} md={10} className="offset-md-1 mb-5">
            <p className="desc">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt="" />
              <div>
                <h5 className="mb-1">{data.name}</h5>
                <p className="m-0 fw-bold">{data.skill}</p>
              </div>
            </div>
          </Col>
          );
        })}
          </Row>
        </Container>
      </div>
      <FaqPage />
    </div>
  )
}

export default ProfilSekolah