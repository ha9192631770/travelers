import Hero from "../components/Hero/Hero";
import Packages from "../components/Packages/Packages";
import Activities from "../components/Activisties/Activities";
import Destinations from "../components/Destinations/Destinations";
import Subscribe from "../components/Subscribe/Subscribe";

const Home = () => {
    return (
        <>
            <Hero />
            <Packages/>
            <Activities/>
            <Destinations />
            <Subscribe />
        </>
    );
};

export default Home;