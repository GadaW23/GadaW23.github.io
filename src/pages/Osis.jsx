import { Container, Row, Col, Table, Breadcrumb, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import ProfileGuru from "../assets/img/Profile.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OsisSiswa = () => {
  let Osis = useNavigate();
  return (
    <div className="osiss-page">
      <div className="osiss min-vh-100">
        <Container>
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Col md={10} className="offset-md-1">
          <Breadcrumb className="">
      <Breadcrumb.Item onClick={() => Osis("/home")}><FontAwesomeIcon icon={faHouse} /> Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Osis</Breadcrumb.Item>
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
              <h2 className=" pb-4   fw-bold text-uppercase text-center">
                {" "}
                OSIS (ORGANISASI SISWA INTRA SEKOLAH){" "}
              </h2>
            </Col>
        </Row>
        
        <Row>
            <Col md={10} className="offset-md-1">
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
                <td>Ketua Osis</td>
                <td>PILARAFY MAHDI ANESTIAR</td>
                <td>XI IPA 3</td>
              </tr>
              <tr>
                <td>Wakil Ketua Osis 1 </td>
                <td>NURMILA</td>
                <td>XI IPA 1</td>
              </tr>
              <tr>
                <td>Wakil Ketua Osis 2 </td>
                <td>MOHAMAD BILAL SURYADI</td>
                <td>XI IPS 1</td>
              </tr>
              <tr>
                <td>Seketaris 1 </td>
                <td>MARWA SYAHIDANIAH</td>
                <td>XI IPA 4</td>
              </tr>
              <tr>
                <td>Seketaris 2 </td>
                <td>REVALINA SYAHARANI</td>
                <td>XI IPA 6</td>
              </tr>
              <tr>
                <td>Bendahara 1 </td>
                <td>NUR HIDAYAH PUTRI</td>
                <td>XI IPA 2</td>
              </tr>
              <tr>
                <td>Bendahara 2 </td>
                <td>SHERLY SETYA ADRIANI</td>
                <td>XI IPA 5</td>
              </tr>
              <tr>
                <td>Humas 1 </td>
                <td>ANISSA F THOYYIBAH</td>
                <td>XI IPA 3</td>
              </tr>
              <tr>
                <td>Humas 2 </td>
                <td>SHINTIA BELLA</td>
                <td>XI IPA 5</td>
              </tr>
              <tr>
                <td>Koordinator Sekbid 1 </td>
                <td>MUTIARA ANANDA SHAVIRA RUSTINI</td>
                <td>XI IPA 6</td>
              </tr>
              <tr>
                <td>Koordinator Sekbid 2 </td>
                <td> FIKRI NURFAJRI </td>
                <td>XI IPA 5</td>
              </tr>
            </tbody>
          </Table>

        <div className="pt-5">
        <Table striped bordered hover >
      <thead >
        <tr>
            <th className="text-center" colSpan={4}>10 SEKSI BIDANG SEKOLAH</th>
        </tr>
        <tr>
          <th>NO.</th>
          <th>SEKSI BIDANG</th>
          <th>NAMA ANGGOTA</th>
          <th>KELAS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Keagamaan</td>
          <td>
            <p>1. Khaerunnissa Ayuddaya</p>
            <p>2. Rendi Riffandi Sukila</p>
            <p>3. Titi Srihandianti .F</p>
          </td>
          <td>
            <p>X IPA 2</p>
            <p>X IPA 2</p>
            <p>X IPA 5</p>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>Budi Pekerti Luhur</td>
          <td>
            <p>1. Risti Nurmaningsi</p>
            <p>2. Muhammad Andhika .N</p>
            <p>3. Nadiya Dwi Stephany</p>
          </td>
          <td>
            <p>X IPA 5</p>
            <p>X IPA 1</p>
            <p>X IPA 6</p>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>Kepribadian Unggul</td>
          <td>
            <p>1. Desi Sarasavati</p>
            <p>2. Luthfiyatus .S </p>
            <p>3. Herlisa</p>
          </td>
          <td>
            <p>X IPA 5</p>
            <p>X IPA 1</p>
            <p>X IPA 6</p>
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>Seni Akademik</td>
          <td>
            <p>1. Intan Najid Dhanier</p>
            <p>2. Dwi Fajar .C</p>
            <p>3. M. Febri .P.P</p>
          </td>
          <td>
            <p>X IPA 1</p>
            <p>X IPA 3</p>
            <p>X IPA 2</p>
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>Cinta Tanah Air</td>
          <td>
            <p>1. Elisa</p>
            <p>2. Kusuma Dewi</p>
            <p>3. Putri Nuril</p>
            <p>4. Dhea Trinita ayu .F</p>
          </td>
          <td>
            <p>X IPA 1</p>
            <p>X IPA 2</p>
            <p>X IPA 4</p>
            <p>X IPA 5</p>
          </td>
        </tr>

        <tr>
          <td>6</td>
          <td>Kewirausahaan</td>
          <td>
            <p>1. Ike Yulita</p>
            <p>2. Muhammad Fajar .J</p>
            <p>3. Zahra Regitha .P</p>
            <p>4. M. Fatiqh Al Kholvi</p>
          </td>
          <td>
            <p>X IPA 5</p>
            <p>X IPA 6</p>
            <p>X IPA 2</p>
            <p>X IPA 6</p>
          </td>
        </tr>

        <tr>
          <td>7</td>
          <td>Jasmani dan Rohani</td>
          <td>
            <p>1. Deni Tirta Dilaga</p>
            <p>2. Firdansyah Lutfiah</p>
            <p>3. Chesya Fahira</p>
            <p>4. Federicko Ramiro. F</p>
          </td>
          <td>
            <p>X IPA 5</p>
            <p>X IPA 3</p>
            <p>X IPA 7</p>
            <p>X IPA 4</p>
          </td>
        </tr>

        <tr>
          <td>8</td>
          <td>Sastra dan Budaya</td>
          <td>
            <p>1. Rohiful Azzam</p>
            <p>2. Sophiyanti dewi</p>
            <p>3. M.Tegar</p>
            <p>4. Siska Safitri</p>
          </td>
          <td>
            <p>X IPA 5</p>
            <p>X IPA 2</p>
            <p>X IPS 3</p>
            <p>X IPA 3</p>
          </td>
        </tr>

        <tr>
          <td>9</td>
          <td>Teknologi Informasi & Komunikasi</td>
          <td>
            <p>1. Mutiara Tifani</p>
            <p>2. Putri Andini</p>
            <p>3. Maharani Salsabila .N</p>
            <p>4. Rika Septyani</p>
          </td>
          <td>
            <p>X IPS 2</p>
            <p>X IPA 3</p>
            <p>X IPA 6</p>
            <p>X IPA 3</p>
          </td>
        </tr>

        <tr>
          <td>10</td>
          <td>Komunikasi Bahasa Inggris</td>
          <td>
            <p>1. Raissa Syifanaya</p>
            <p>2. Syamsul Maarif</p>
            <p>3. Liswanati</p>
          </td>
          <td>
            <p>X IPA 1</p>
            <p>X IPA 1</p>
            <p>X IPA 4</p>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
    </Col>
</Row>    
        </Container>
      </div>
    </div>
  );
};

export default OsisSiswa;
