import React from "react";
import { Container, Row, Col, Breadcrumb, Image } from "react-bootstrap";
import FaqPage from "../pages/FaqPage";
import Fotomisi from "../assets/img/kelas/fotovisi.jpg";
import { fasilitas } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Fasilitas() {
  let fasilitas2 = useNavigate();
  return (
    <div className="fasilitas-page">
      <div className="fasilitas min-vh-100">
        <Container>
          <Row style={{ display: "flex", flexDirection: "column" }}>
            <Col md={10} className="offset-md-1">
            <Breadcrumb className="pt-5">
      <Breadcrumb.Item onClick={() => fasilitas2("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Fasilitas</Breadcrumb.Item>
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
           Sarana dan Prsarana
          </h5>
              <p className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                inventore corrupti doloremque.
              </p>
            </Col>
          </Row>
          <Row>
            {fasilitas.map((fasil) => {
              return (
                <Col key={fasil.id} className="rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={fasil.delay}>
                  <img
                    src={fasil.image}
                    alt="unsplash.com"
                    className="w-100 mb-1 rounded-top"
                  />
                  <h5 className="text-uppercase text-center mb-1 pt-2 px-3">{fasil.nama}</h5>
                  <div className="ket align-items-center px-3 pb-3">
                    <p className="text-muted text-center fw-ligh">{fasil.desk}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqPage />
    </div>
  );
}

export default Fasilitas;
