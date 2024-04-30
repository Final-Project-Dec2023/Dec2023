import Hero from "../components/Hero";
import Brands from "../components/Brand";
import Testimonies from "../components/Testimonies";
import BlogCard from "../components/Blog";
import Footer from "../components/Footer";
import Menu from "../components/NavBar";
import SideNav from "../components/SideNav";
import CountDownTimer from "../components/CountDownTimer";
import AllfragranceComponent from "../components/AllfragranceComponent";

const Home = () => {
  return (
    <div>
      <Menu />
      <SideNav />
      <Hero />
      <Brands />
      <Testimonies />
      <CountDownTimer/>
      <AllfragranceComponent/>
      <BlogCard />
      <Footer />
    </div>
  );
};

export default Home;
