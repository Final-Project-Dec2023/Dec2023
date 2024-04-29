import Hero from "../components/Hero";
import Brands from "../components/Brand";
import Testimonies from "../components/Testimonies";
import BlogCard from "../components/Blog";
import Footer from "../components/Footer";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";
import NewArrivalComponent from "../components/NewArrivalComponent";
import CountDownTimer from "../components/CountDownTimer";

const Home = () => {
  return (
    <>
      <Menu />
      <SideNav />
      <Hero />
      <Brands />
      <Testimonies />
      <NewArrivalComponent title="New Arrivals" link = "/new-arrivals"/>
      <CountDownTimer/>
      <BlogCard />
      <Footer />
    </>
  );
};

export default Home;
