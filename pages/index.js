import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "./contents/hero";
import Service from "./contents/service";
import Barra from "./contents/barra";
import Carousel from "./contents/carousel";
import Location from "./contents/location";
import Whatsapp from "./contents/btn-whatsapp";
import Instagram from "./contents/btn-instagram";

export default function App() {
  return (
    <div className="app">
      <Head />
      <Instagram />
      <Whatsapp />
      <Navbar />
      <Hero />
      <hr />
      <div className="service">
        <Service
          title={"Ajuste"}
          img={"/ajuste-min.jpg"}
          text={
            "O Ajuste de roupa contribui com o caimento da peça e proporciona mais conforto."
          }
        />
        <Service
          title={"Conserto"}
          img={"/conserto-min.jpg"}
          text={
            "O conserto é uma forma rápida para recuperar pequenas avarias na peça."
          }
        />
        <Service
          title={"Customização"}
          img={"/customizacao-min.jpg"}
          text={
            "O processo de customização pode ser feito com apliques, patches, rendados entre outros."
          }
        />
        <Service
          title={"Confecção"}
          img={"/confeccao-min.jpg"}
          text={
            "Crie uma peça exclusiva, (há limite de quantidade, entre em contato para mais informações)."
          }
        />
      </div>
      <Barra />
      <Carousel />
      <hr />
      <Location />
      <hr />
      <Footer />
    </div>
  );
}
