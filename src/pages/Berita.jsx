import { Container, Row, Col, Breadcrumb, Image } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqPage from "../pages/FaqPage";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import ProfileGuru from "../assets/img/Profile.png";

const Berita = () => {
  let berita = useNavigate();

  const Styling = {
    color: "rgb(2, 2, 76)",
    textDecoration: "none",
  };
  return (
    <div className="kelas-page">
      <div className="kelas min-vh-100 overflow-hidden">
        <Container>
          <Row style={{ display: "flex", flexDirection: "column" }}>
            <Col md={10} className="offset-md-1 pt-5 pb-4">
              <Breadcrumb>
      <Breadcrumb.Item onClick={() => berita("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Berita</Breadcrumb.Item>
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

            <Col md={10} className="offset-md-1 pb-5">
              <h1 className="fw-bold text-center text-opacity-75 animate__animated animate__fadeInUp animate__delay-1s ">
                Berita Update
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                inventore corrupti doloremque.
              </p>
            </Col>
          </Row>

          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col key={kelas.id} className=" rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-1 rounded-top"
                  />
                  <h5 style={Styling} className="mb-1 pt-2 px-1">
                    {" "}
                    <a href="" className="link1">
                      {kelas.title}
                    </a>
                  </h5>
                  <div className="ket justify-content-between align-items-center px-1 pb-3">
                    <p className="">{kelas.paragraph}</p>
                    <div className="bt-read">
                      <a
                        href=""
                        className="link2"
                        onClick={() => berita("/Detailnews")}
                      >
                        {kelas.hrf}
                        <i className="fa-solid fa-angles-right"> </i>
                      </a>
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
  );
};

export default Berita;
