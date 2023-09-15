import { Container, Row, Col, Image, Breadcrumb } from "react-bootstrap";
import FaqPage from "./FaqPage";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import ProfileGuru from "../assets/img/Profile.png";

const DetailNews = () => {
  let detailNews = useNavigate();
  return (
    <div className="Detail-news-page">
      <div className="Detail-news min-vh-100">
        <Container>
          <Row style={{ display: "flex", flexDirection: "column" }}>
            <Col md={10} className="offset-md-1">
              <Breadcrumb className="pt-5">
                <Breadcrumb.Item onClick={() => detailNews("/home")}>
                  <FontAwesomeIcon icon={faHouse} /> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>News</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col md={10} className="offset-md-1 pb-3">
              <Image src={ProfileGuru} className="img-fluid pt-2" />
            </Col>

            <Col md={10} className="offset-md-1 py-2 text-end">
        <div className="social">
        <i className="fa-solid fa-square-share-nodes"></i>
        <Link><i className="px-3 fa-brands fa-instagram"></i></Link>
         <Link to=''><i className='fa-brands fa-tiktok'></i></Link>
         <hr />
         </div>    
          </Col>

            <Col>
              <h4 className="fw-bold text-center">
                SMA Negeri 5 Kota Cirebon Menerapkan Program 5 Hari Sekolah
              </h4>
            </Col>
          </Row>
          <Row className="pt-3">
            <Col md={10} className="offset-md-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                voluptates ex cumque, libero iusto facere reiciendis illo porro
                totam odit veritatis quod. Dicta laudantium dolorum neque
                accusantium facere. Dolorem aliquam, maxime dicta atque, iste in
                omnis consequatur tempora dolore, molestiae harum voluptas eum
                totam natus voluptates nostrum recusandae. Mollitia, porro!
              </p>
            </Col>
          </Row>

          <Row className="pt-3">
            <Col md={10} className="offset-md-1 py-3">
              <h4 className="fw-bold">1. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                voluptates ex cumque, libero iusto facere reiciendis illo porro
                totam odit veritatis quod. Dicta laudantium dolorum neque
                accusantium facere. Dolorem aliquam, maxime dicta atque, iste in
                omnis consequatur tempora dolore, molestiae harum voluptas eum
                totam natus voluptates nostrum recusandae. Mollitia, porro!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus nobis, et, fugit soluta deleniti, ab magni quisquam
                molestiae ad blanditiis suscipit culpa perferendis libero!
                Repudiandae, aut quis? Adipisci cum odit ad. Odit, hic?
                Reiciendis veritatis culpa deserunt, dolor voluptatem officiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
                tenetur, dignissimos harum maiores sapiente nam id voluptatem
                asperiores accusantium alias velit rem doloribus est eum
                praesentium voluptates aspernatur sunt eaque?
              </p>
            </Col>
          </Row>

          <Row className="pt-3">
            <Col md={10} className="offset-md-1 py-3">
              <h4 className="fw-bold">2. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                voluptates ex cumque, libero iusto facere reiciendis illo porro
                totam odit veritatis quod. Dicta laudantium dolorum neque
                accusantium facere. Dolorem aliquam, maxime dicta atque, iste in
                omnis consequatur tempora dolore, molestiae harum voluptas eum
                totam natus voluptates nostrum recusandae. Mollitia, porro!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus nobis, et, fugit soluta deleniti, ab magni quisquam
                molestiae ad blanditiis suscipit culpa perferendis libero!
                Repudiandae, aut quis? Adipisci cum odit ad. Odit, hic?
                Reiciendis veritatis culpa deserunt, dolor voluptatem officiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                sed totam odit minus magni eius reprehenderit libero expedita
                maxime quae, blanditiis aut earum in similique praesentium harum
                cupiditate doloremque, mollitia asperiores est! Dolorem
                blanditiis inventore reprehenderit expedita consectetur vero
                odit, earum magnam dignissimos quos id perferendis quasi aliquam
                temporibus provident eum atque neque, quis vitae! Quis itaque
                delectus obcaecati molestiae recusandae commodi officia, sint
                cumque ad animi! Quasi numquam vitae reiciendis sapiente, et
                eligendi doloremque modi est quia dolorum. Quae!
              </p>
            </Col>
          </Row>

          <Row className="pt-3">
            <Col md={10} className="offset-md-1 py-3">
              <h4 className="fw-bold">3. Lorem</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quisquam sunt ex dolor quod expedita esse! Sint,
                tempore. Tempora labore dolores, error reprehenderit quam amet
                harum ex adipisci eum aliquam, officia doloribus ab provident
                nesciunt ad. Esse ex deleniti qui? Cumque quo labore velit animi
                eius magnam! Nemo commodi alias eligendi autem asperiores
                expedita tempore? Repellendus voluptatum veniam natus corrupti
                facilis ipsa eaque saepe? Provident voluptates debitis
                blanditiis. Dolor qui quo hic ipsam reiciendis sint aspernatur
                magni nulla repellat, nesciunt deleniti iure saepe porro illum
                tenetur minima minus. Facilis, qui.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus nobis, et, fugit soluta deleniti, ab magni quisquam
                molestiae ad blanditiis suscipit culpa perferendis libero!
                Repudiandae, aut quis? Adipisci cum odit ad. Odit, hic?
                Reiciendis veritatis culpa deserunt, dolor voluptatem officiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                sed totam odit minus magni eius reprehenderit libero expedita
                maxime quae, blanditiis aut earum in similique praesentium harum
                cupiditate doloremque, mollitia asperiores est! Dolorem
                blanditiis inventore reprehenderit expedita consectetur vero
                odit, earum magnam dignissimos quos id perferendis quasi aliquam
                temporibus provident eum atque neque, quis vitae! Quis itaque
                delectus obcaecati molestiae recusandae commodi officia, sint
                cumque ad animi! Quasi numquam vitae reiciendis sapiente, et
                eligendi doloremque modi est quia dolorum. Quae!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqPage />
    </div>
  );
};

export default DetailNews;
