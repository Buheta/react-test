import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import HeroSlider from './components/HeroSlider'
// import InfoWithAlbum from './components/InfoWithAlbum'
// import NewsFeature from './components/newsEvents'
// import Application from './components/application'
// import FooterDetails from './components/footerDetails'
// import ContactUs from './components/ContactUs';
// import HomeForPages from './components/homeForPages';
// import AboutUs from './components/aboutUs';
// import SchoolLevels from './components/schoolLevels';
// import AcademicsPage from './components/academicsPage';
// import ProgramsOfferedPage from './pages/programsOfferedPage';
// import SportsPage from './pages/sportsPage';
// import SpiritualPage from './pages/spiritualLifePage';
// import KigaliBlogPage from './pages/kigaliSchoolBlog';
// import RubavuBlogPage from './pages/rubavuSchoolBlog';
// import Gallery from './pages/Gallery';
// import TextImageSlider from './components/objectivePage';
// import DirectorMessage from './components/directorMessage';
// import Footer from './components/footer';
import ClubsPage from './pages/ClubsPage';
import Navbar from './components/Navbar';
import SchoolLevels from './components/schoolLevels';
import InfoWithAlbum from './components/InfoWithAlbum';
import TextImageSlider from './components/objectivePage';
import FooterDetails from './components/footerDetails';
import HomeForPages from './components/homeForPages';
import NewsFeature from './components/newsEvents';
import SportsPage from './pages/sportsPage';
import SpiritualPage from './pages/spiritualLifePage';
import KigaliBlogPage from './pages/kigaliSchoolBlog';
import RubavuBlogPage from './pages/rubavuSchoolBlog';
import ContactUs from './components/ContactUs';
import Footer from './components/footer';
import HeroSlider from './components/HeroSlider';
import DirectorMessage from './components/directorMessage';
import Application from './components/application';
import Gallery from './pages/Gallery';
import AcademicsPage from './components/academicsPage';
import NurserySection from './pages/nursuryPage';
import PrimarySection from './pages/primaryPage';
import HighSchoolSection from './pages/highSchool';
import highImg from '../src/assets/images/galleryHome.JPG';
import primImg from '../src/assets/images/primary.JPG';
import nursImg from './assets/images/gallery38.JPG';
import clubImg from './assets/images/spell3.jpg';
import sportImg from './assets/images/pich.webp';
import homeImage from './assets/images/aboutImage.jpg';
import AboutUs from './components/aboutUs';

// Homepage layout component
const HomePage = () => (
  <>
    <Navbar />
    <HeroSlider />
    <SchoolLevels />
    <InfoWithAlbum />
    <DirectorMessage />
    {/* <WhatSetsUsApart /> */}
    <TextImageSlider/>
    {/* <NewsFeature /> */}
    <Application />
    <FooterDetails />
    <Footer />
  </>
);
// Campus News Page
const CampusNewsPage = () => (
  <>
    <Navbar />
    <HomeForPages title="News & Events" />
    {/* <EventsSlider /> */}
    <NewsFeature />
    <Footer />
  </>
);
const Clubs = () => (
  <>
  <Navbar/>
  <HomeForPages title="Explore Our Clubs" image={clubImg}/>
  <ClubsPage/>
  <FooterDetails />
  <Footer />
  </>
);
const Sports = () => (
  <>
  <Navbar/>
  <HomeForPages title="Explore Sports" image={sportImg}/>
  <SportsPage/>
  <FooterDetails />
  <Footer />
  </>
);
const SpiritualP = () => (
  <>
  <Navbar/>
  {/* <HomeForPages title="Explore Sports" /> */}
  <SpiritualPage/>
  <FooterDetails />
  <Footer />
  </>
);
const KigaliBlog = () => (
  <>
  <KigaliBlogPage/>
  <Footer />
  </>
);
const RubavuBlog= () => (
  <>
  <RubavuBlogPage/>
  <Footer />
  </>
);
const GalleryP= () => (
  <>
  <Gallery/>
  <Footer />
  </>
);
const Contact= () => (
  <>
  <Navbar/>
  <HomeForPages title="Contact Us" image={homeImage}/>
  <ContactUs/>
  <Footer />
  </>
);
const About= () => (
  <>
  <Navbar/>
  <HomeForPages title="About Us" image={homeImage}/>
  <AboutUs/>
  <Footer />
  </>
);
const NurseryPage = () => (
  <>
  <Navbar/>
  <HomeForPages title="Wisdom School Nursery" image={nursImg}/>
  <NurserySection/>
  <FooterDetails />
  <Footer />
  </>
);
const PrimaryPage = () => (
  <>
  <Navbar/>
  <HomeForPages title="Wisdom School Primary" image={primImg}/>
  <PrimarySection/>
  <FooterDetails />
  <Footer />
  </>
);
const HighSchoolPage = () => (
  <>
  <Navbar/>
  <HomeForPages title="Wisdom High School" image={highImg}/>
  <HighSchoolSection/>
  <FooterDetails />
  <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campus-news" element={<CampusNewsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/Academic" element={<AcademicsPage />} />
        <Route path="/academics/nursery" element={<NurseryPage />} />
        <Route path="/academics/primary" element={<PrimaryPage />} />
        <Route path="/academics/highSchool" element={<HighSchoolPage />} />
        <Route path="/student-life/clubs" element={<Clubs/>} />
        <Route path="/student-life/sports" element={<Sports/>}/>
        <Route path="/student-life" element={<SpiritualP/>}/>
        <Route path="/schools/kigali" element={<KigaliBlog/>}/>
        <Route path="/schools/rubavu" element={<RubavuBlog/>}/>
        <Route path="/gallery/photo" element={<GalleryP/>}/>
        <Route path="*" element={<div className="pt-24 text-center">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;


