import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";

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
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Home;