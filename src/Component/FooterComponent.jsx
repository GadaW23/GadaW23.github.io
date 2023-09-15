import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  const styleBg = {
    backgroundColor: " rgb(2, 2, 76)",
  };
  return (
    <div className='footer py-5'>
      <Container className='text-white'>
        <Row className='d-flex justify-content-between'>
          <Col lg='5'>
            <h3 className='fw-bold '>SMAN5 Kota Cirebon.</h3>
            <p className='desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat atque, numquam nulla porro vero laborum.</p>
            <div className='no mb-1 mt-4'>
              <Link className='text-decoration-none'>
              <i className='fa-brands fa-whatsapp'></i>
              <p className='m-0'>08832348335</p>
              </Link>
            </div>
            <div className='mail'>
              <Link className='text-decoration-none'>
              <i className='fa-regular fa-envelope'></i>
              <p className='m-0'>sman5kotacirebon@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className='d-flex justify-content-center flex-column col-lg-2 col mt-lg-0 mt-5'>
          <h5 className='fw-bold'>Menu</h5>
          <Link to=""> Home </Link>
          <Link to="Profil"> ProfilSekolah </Link>
          <Link to="Berita"> Berita </Link>
          <Link to="Faq"> FAQ </Link>
          <Link to="Kontak"> Kontak </Link>
          </Col>
          <Col lg='4' className='mt-lg-0 mt-5'>
          <h5 className='fw-bold mb-3'>Ikuti Sosial Media Kami</h5>
          <div className='social'>
            <Link to='https://www.instagram.com/sman5cirebon_jurnalis/' target='_blank'><i className='fa-brands fa-instagram'></i></Link>
            <Link to=''><i className='fa-brands fa-tiktok'></i></Link>
            <Link to=''><i className='fa-brands fa-youtube'></i></Link>
            <Link to=''><i className='fa-brands fa-linkedin'></i></Link>
            <Link to=''><i className='fa-brands fa-twitter'></i></Link>
          </div>
          </Col>
        </Row>  
        <Row >
          <Col className='kalter' style={styleBg}>
          <p className='text-center px-md-0 px-3'> &copy; Copyright {new Date().getFullYear()} inspiration by <span className='fw-bold'>Ngoding Mastery</span>, All Right Reserved </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent