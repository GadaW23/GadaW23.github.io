import { Container, Col, Row, Image, Breadcrumb } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Galleri } from "../data/index";
import Fotomisi from "../assets/img/kelas/fotovisi.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  let galeri = useNavigate();
  return (
    <div className="gallery min-vh-100 d-flex align-items-center">
      <Container>
        <Row style={{ display: "flex", flexDirection: "column" }}>
        <Col md={10} className="offset-md-1 pt-5">
          <Breadcrumb>
      <Breadcrumb.Item onClick={() => galeri("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Galeri</Breadcrumb.Item>
    </Breadcrumb>
          </Col>

          <Col md={10} className="offset-md-1 py-2">
          <Image src={Fotomisi} className="w-100" />
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
            Galeri Kegiatan Sekolah SMAN 5 Cirebon
          </h5>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                inventore corrupti doloremque.
              </p>
            </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
          {Galleri.map((galeri) => {
            return (
              <Col key={galeri.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={galeri.delay}>
                <img src={galeri.image} alt="" className="p-2 w-100" />
                <p className="text-muted text-center mt-1">{galeri.tittle}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
