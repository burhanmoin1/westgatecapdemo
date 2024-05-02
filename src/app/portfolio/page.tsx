import CustomNavbar from '../Navbar';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import Portfolio from './Portfolio.js';

export default function PortfolioPage() {

return (
    <main>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&family=Tilt+Neon&display=swap" rel="stylesheet"/>
        <CustomNavbar />
        <Portfolio />
        <ContactUs />
        <Footer />
    </main>
);

};