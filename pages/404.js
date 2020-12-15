import Head from "../components/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Custom404() {
  return (
    <div className="erro-404">
      <Head />
      <Navbar />
      <div className="content">
        <img src="/404.svg" alt="Status 404"/>
      </div>
      <hr />
      <Footer />
    </div>
  );
}
