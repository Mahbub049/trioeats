import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "../Shared/Footer/Footer";
import HomeCards from "./HomeCards/HomeCards";
import Reservations from "./Reservations/Reservations";
import Contact from "./Contact/Contact";

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>TrioEats</title>
            </Helmet>
            <div>
                <div className="container mx-auto">
                    <Navbar></Navbar>
                    <Banner></Banner>
                    <HomeCards></HomeCards>
                    <Reservations></Reservations>
                    <Contact></Contact>
                </div>
                    <Footer></Footer>
            </div>
        </HelmetProvider>
    );
};

export default Home;