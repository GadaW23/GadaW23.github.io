import { Container, Row, Col, Table, Breadcrumb, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileGuru from "../assets/img/Profile.png";

const MpkSiswa = () => {
    let mpk = useNavigate();
  return (
    <div className="mpk-page">
      <div className="mpk min-vh-100">
        <Container>
        <Row style={{ display: "flex", flexDirection: "column" }}>
        <Col md={10} className="offset-md-1">
           <Breadcrumb className="">
      <Breadcrumb.Item onClick={() => mpk("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item>
              <Breadcrumb.Item active>MPK</Breadcrumb.Item>
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

          <Col Col md={10} className="offset-md-1">
              <h2 className="pb-4 fw-bold text-uppercase text-center">
                {" "}
                SUSUNAN PENGURUS MPK (MAJELIS PERWAKILAN KELAS){" "}
              </h2>
            </Col>
        </Row>
        
        <Row>
            <Col Col md={10} className="offset-md-1">
            <Table striped bordered hover>
            <thead className="text-center">
            <tr>
                <th>Jabatan</th>
                <th>Nama</th>
                <th>Kelas</th>
            </tr>
            </thead>
            <tbody className="">
            <tr>
                <td>Ketua</td>
                <td>ANDINI MAESAPUTRI</td>
                <td>XI IPA 1</td>
            </tr>
            <tr>
                <td>Wakil Ketua</td>
                <td>SHALSABILA AZZAHRA POETRI</td>
                <td>XI IPA 6</td>
            </tr>
            <tr>
                <td>Seketaris 1 </td>
                <td>LUSIANI NURHAYATIN</td>
                <td>XI IPA 1</td>
            </tr>
            <tr>
                <td>Seketaris 2 </td>
                <td>MARTIN MORANG SITUMORANG</td>
                <td>XI IPA 5</td>
            </tr>
            <tr>
                <td>Bendahara 1 </td>
                <td>ELSA MONICA SANDRA</td>
                <td>XI IPA 2</td>
            </tr>
            <tr>
                <td>Bendahara 2 </td>
                <td>SALVA RIZKYA H. T</td>
                <td>XI IPA 4</td>
            </tr>
            <tr>
                <td>KOMISI A</td>
                <td>
                    <p>FIRDA SALSABILA</p>
                    <p>REZA OLIVIIRANT</p>
                    <p>IKA KHALIMATUS SA’DDIYAH</p>
                </td>
                <td>
                    <p>XI IPA 1</p>
                    <p>XI IPS 3</p>
                    <p>XI IPA 4</p>
                </td>
            </tr>
            <tr>
                <td>KOMISI B</td>
                <td>
                    <p>MAULANA IRAWAN</p>
                    <p>ALFI LAELY QODRI AMIN</p>
                    <p>DINI TRI KUSUMA DEWI</p>
                </td>
                <td>
                    <p>XI IPA 4</p>
                    <p>XI IPA 2</p>
                    <p>XI IPA 5</p>
                </td>
            </tr>
            <tr>
                <td>KOMISI B</td>
                <td>
                    <p>AFIFAH</p>
                    <p>MELISA</p>
                    <p>FITRIYAYUL WAHIDAH</p>
                    <p>RAIHAN FATHAN</p>
                </td>
                <td>
                    <p>XI IPA 4</p>
                    <p>XI IPA 4</p>
                    <p>XI IPS 1</p>
                    <p>XI IPA 2</p>
                </td>
            </tr>
            </tbody>
            </Table>
                    </Col>
            </Row>
        </Container>
        </div>
    </div>
    );
};

export default MpkSiswa;
