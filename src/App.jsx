import {Routes, Route} from "react-router-dom";

import ComponentNavbar from "./Component/ComponentNavbar";
import FooterComponent from "./Component/FooterComponent";

import HomePage from "./pages/HomePage";
import ProfilSekolah from "./pages/ProfilSekolah";
import Berita from "./pages/Berita";
import Prestasi from "./pages/Prestasi";
import Ekstrakulikuler from "./pages/Ekstrakulikuler";
import FaqPage from "./pages/FaqPage";
import Osis from "./pages/Osis";
import MpkSiswa from "./pages/Mpk";

import Gallery from "./Component/Gallery";
import Visimisi from "./Component/Visimisi";
import Profileguru from "./Component/Profileguru";
import Fasilitas from "./Component/Fasilitas";


import DetailNews from "./pages/DetailNews"


function App() {
  return (
    <>
  <ComponentNavbar />

    <Routes>
      <Route path="/home" Component={HomePage}/>
      <Route path="/Profil" Component={ProfilSekolah}/>
      <Route path="/Berita" Component={Berita}/>
      <Route path="/Prestasi" Component={Prestasi}/>
      <Route path="/Faq" Component={FaqPage}/>
      <Route path="/Ekstrakulikuler" Component={Ekstrakulikuler}/>
      <Route path="/Osis" Component={Osis}/>
      <Route path="/Mpk" Component={MpkSiswa}/>
      <Route path="/Galeri" Component={Gallery}/>
      <Route path="/Visimisi" Component={Visimisi}/>
      <Route path="/Profileguru" Component={Profileguru}/>
      <Route path="/Fasilitas" Component={Fasilitas}/>
      <Route path="/Detailnews" Component={DetailNews}/>
    </Routes>
    <FooterComponent /> 
    </>
  )
}

export default App
