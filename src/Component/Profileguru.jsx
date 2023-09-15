import { Container, Row, Col, Card, Image, Breadcrumb } from "react-bootstrap";

import { profilGuru } from "../data/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";


import ProfileGuru from "../assets/img/Profile.png";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// import React from "react";

function Profileguru() {
  let profileGuru = useNavigate();
  return (
    <div className="profile min-vh-100">
      <Container>
        <Row style={{ display: 'flex', flexDirection: 'column' }}>
        <Col md={10} className="offset-md-1 pt-5">
    <Breadcrumb>
      <Breadcrumb.Item  onClick={() => profileGuru("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Profil Guru</Breadcrumb.Item>
    </Breadcrumb>
  </Col>
          <Col md={10} className="offset-md-1 pb-3 pt-2">
            <Image src={ProfileGuru} className="img-fluid" />
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
              <h2 className=" pt-3 fw-bold text-uppercase text-center">
                {" "}
                Profile Guru SMAN 5 Kota Cirebon{" "}
              </h2>
            </Col>
        </Row>

        <Row className="justify-content-center row-cols-lg-4 row-cols-md-3 row-cols-sm-1 g-4">
          {profilGuru.map((profil) => {
            return (
              <Col key={profil.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={profil.delay} >
                <Card >
                  <Card.Img variant="top" src={profil.image} />
                  <Card.Body>
                    <Card.Title className=" text-center fw-light text-white mb-2 px-2">
                      {profil.nama}
                    </Card.Title>
                    <hr
                      className="text-white"
                      style={{ borderTop: "3px solid" }}
                    />
                    <Card.Text className="titl text-center fw-light text-white align-items-center px-2 pb-2">
                      {profil.title} 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Profileguru;
