import { Container, Row, Col, Card, Button, Image, } from "react-bootstrap";
// import { useRef, useState, useEffect } from "react";
// import HeroImage from "../assets/img/hero.png";

import { kelasTerbaru, dataSwiper, fotoHeader } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqPage from "./FaqPage";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HomePage() {
  let navigate = useNavigate();

  const Styling = {
    color: 'rgb(2, 2, 76)',
    textDecoration: 'none'
  }

  return (
    <div className="homepage">
      {/* <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center pt-lg-5">
              <Col lg="6">
                <h1 className="mb-4">
                  Wujudkan <span> Impianmu </span> Bersama Kami <br />SMAN5 Kota Cirebon</h1>
                <p className="mb-4">
                  Mewujudkan siswa yang Religius, Mandiri dan Unggul dalam  Prestasi
                </p>
                <button className="btn btn-danger btn-lg rounded-1">Cek PPDB</button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5">
                <img src={HeroImage} alt="hero-img"></img>
              </Col>
            </Row>
          </Container>
        </header> */}
      <header>
        <Container className="container-fluid">
          <Row>
            <Col>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {fotoHeader.map((img) => {
                  return (
                    <SwiperSlide key={img.id}>
                      <img src={img.image} alt="" />
                      {/* <Carousel.Caption>
              <h5>Gada</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, ullam!</p>
              </Carousel.Caption> */}
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>

        {/* Info Pendaftaran */}

        <div className="pendaftaran py-4 w-100">
          <Container>
            <Row>
              <Col data-aos="fade-right" data-aos-duration="1000" >
                <Card className="border-white rounded">
                  <Card.Body className="text-center ">
                    <Card.Title className="fs-4  text-uppercase fw-bold" style={Styling}>
                      Penerimaan Peserta Didik Baru
                    </Card.Title>
                    <Card.Text className="fs-5 text-muted">
                      Informasi & Pendaftaran Siswa Baru Tahun Ajaran 2023/2024
                    </Card.Text>
                    {/* <Button variant="outline-primary" style={buttonStyle}>Info PPDB</Button> */}
                    <button
                className="outline-button2"
                onClick={() => navigate("/Berita")}
              >
                INFO PPDB <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Info Pendaftaran */}
      </header>

      

      {/* Sejarah Singkat */}

      <main>
        <Container>
          <Row className="py-4 my-5" data-aos="fade-left" data-aos-duration="1000">
            <Col sm={6} >
              <Image
                src="https://picsum.photos/800/500"
                fluid
                rounded
                className="mb-4"
              />
            </Col>
            <Col sm={6} className="align-self-center ">
              <h2 style={Styling} className="fw-bold text-center pt-2 text-uppercase">
                Sejarah Singkat Sekolah
              </h2>
              <h3 style={Styling} className="fw-bold text-center pt-2 text-uppercase">
                {" "}
                sman 5 kota cirebon{" "}
              </h3>
              <p className="mt-4 text-center text-muted fs-6">
                SMA Negeri 5 Cirebon didirikan pada tahun 1987 yang merupakan
                sekolah filial dari SMA Negeri 4 Cirebon, dan pada tahun 1990
                mulai menempati kampus sendiri di jalan Swasembada Majasem
                Cirebon hingga sekarang.{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </main>

      {/* Sejarah Singkat */}

      {/* Berita */}
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 style={Styling} className="text-center fw-bold text-uppercase">
                Berita Terbaru
              </h1>
              <p className="text-center text-muted">
               Sekilas Info Berita Update Terkini
              </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} className="rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay} >
                  <img src={kelas.image} className="w-100 mb-1 rounded-top" />
                  <h5 style={Styling} className="mb-1 pt-2 px-1"> <a href="" className="link1">{kelas.title}</a></h5>
                  <div className="ket justify-content-between align-items-center px-1 pb-3">
                    <p className="">{kelas.paragraph}</p>
                    <div className="bt-read"
                    ><a href="" className="link2">
                        {kelas.hrf}
                        <i className="fa-solid fa-angles-right" > </i>
                    </a>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="outline-button"  data-aos="fade-up" data-aos-duration="1000"
                onClick={() => navigate("/Berita")}
              >
                Selengkapnya <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Berita */}

      {/* Testimonial */}
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center text-white fw-semibold text-uppercase my-5">profil alumni</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className=" border-white">
                    <p className="desc text-white">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1 text-white">{data.name}</h5>
                        <p className="m-0 text-white text-opacity-75">
                          {data.skill}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* End Testimonial */}

      {/* section Faq */}
      <FaqPage />
      {/* section Faq */}
    </div>
  );
}

export default HomePage;
