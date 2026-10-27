import Header from "@/components/Header";
import NavBar from "../components/NavBar"
import Introduction from "@/components/Introduction";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Header/>
      <Introduction/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  );
}
