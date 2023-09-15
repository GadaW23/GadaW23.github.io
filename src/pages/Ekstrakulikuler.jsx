import { Container, Row, Col, Image, Breadcrumb } from "react-bootstrap";

import { ekstrakurikuler } from "../data/index";
import ProfileGuru from "../assets/img/Profile.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";


const Ekstrakulikuler = () => {
  let ekstrKurikuler = useNavigate();

  return (
    <div className="eks min-vh-100 d-flex align-items-center">
    <Container>
      <Row style={{ display: "flex", flexDirection: "column" }}>
      <Col md={10} className="offset-md-1 pt-2">
      <Breadcrumb>
      <Breadcrumb.Item  onClick={() => ekstrKurikuler("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item> 
      <Breadcrumb.Item active>Ekstrakulikuler</Breadcrumb.Item>
    </Breadcrumb>
      </Col>
      
      <Col md={10} className="offset-md-1 py-2">
          <Image src={ProfileGuru} className="w-100" />
          </Col>

          <Col md={10} className="offset-md-1 py-2 text-end">
        <div className="social">
        <i className="fa-solid fa-square-share-nodes"></i>
        <Link><i className="px-3 fa-brands fa-instagram"></i></Link>
         <Link to=''><i className='fa-brands fa-tiktok'></i></Link>
         <hr />
         </div>    
          </Col>

          <Col md={10} className="offset-md-1">
          <h5 className="text-center text-uppercase fw-bold fs-3 pt-4">
            Kegiatan Ekstrakulikuler Sekolah SMAN 5 Cirebon
          </h5>
          <p className="text-center pb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, odit.
          </p>
            </Col>
      </Row>
      <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
        {ekstrakurikuler.map((ekskul) => {
          return (
            <Col key={ekskul.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={ekskul.delay}>
              <img src={ekskul.image} alt="" className="p-2 w-100" />
              <p className="text-muted text-center text-uppercase mt-1">{ekskul.nama}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  </div>
  )
}

export default Ekstrakulikuler