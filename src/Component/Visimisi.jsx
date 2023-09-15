import { Container, Col, Row, Image, Breadcrumb } from "react-bootstrap";
import { Misi } from "../data";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Fotomisi from "../assets/img/kelas/fotovisi.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Visimisi() {
  let visiMisi = useNavigate();

  return (
    <div className="Visimisi d-flex container-fluid">
      <Container>
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Col md={10} className="offset-md-1">
          <Breadcrumb className="pt-5">
      <Breadcrumb.Item onClick={() => visiMisi("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Visi & Misi</Breadcrumb.Item>
    </Breadcrumb>
          </Col>
          <Col md={10} className="offset-md-1">
            <Image src={Fotomisi} className="w-100 pt-3 pb-3 " />
            </Col>

            <Col md={10} className="offset-md-1 py-2 text-end">
        <div className="social">
        <i className="fa-solid fa-square-share-nodes"></i>
        <Link><i className="px-3 fa-brands fa-instagram"></i></Link>
         <Link to=''><i className='fa-brands fa-tiktok'></i></Link>
         <hr />
         </div>    
          </Col>

        </Row>

        <Row>
          <Col md={10} className="offset-md-1" sm={4}>
            <h2 className=" visih2 fw-bold text-center text-uppercase align-self-center">
              Visi Sekolah
            </h2>
          </Col>

          <Col md={10} className="offset-md-1" sm={8}>
            <h2 className=" text-opacity-75 text-center text-muted pt-2 text-uppercase">
              <q>
                {" "}
                Mewujudkan siswa yang Religius, Mandiri dan Unggul dalam
                Prestasi{" "}
              </q>
            </h2>
          </Col>
        </Row>

        <Row className="d-flex align-items-center">
          {/* <Col>
            <Image
              src="https://picsum.photos/800/500"
              fluid
              rounded
              className="mb-4 align-self-center"
            />
          </Col> */}
          <Col md={10} className="offset-md-1" >
            <ul className="pb-5">
              <h2 className="fw-bold pb-4 text-center text-start py-2 text-uppercase">
                Misi Sekolah{" "}
              </h2>
              {Misi.map((item) => (
                <li key={item.id} className="lh-lg text-muted fs-6">
                  {item.title}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Visimisi;
