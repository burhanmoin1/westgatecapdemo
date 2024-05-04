import CustomNavbar from './Navbar';
import FirstComponent from './FirstComponent';
import PortfolioContainer from './PortfolioContainer';
import AboutUsComponent from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';

export default function Home() {
  return (
    
    <main >
      <link rel="icon" href="./favicon.ico"/>
      <link href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Tilt+Neon&display=swap" rel="stylesheet"/>
        <CustomNavbar />
        <FirstComponent />
        <PortfolioContainer />
        <AboutUsComponent />
        <ContactUs />
        <Footer />
    </main>
  );
}
