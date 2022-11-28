import '../styles/globals.css'
import { RecoilRoot } from "recoil";
import {  Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Navbar />
      <Toaster    
      position="top-right" />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
   
  );
}

export default MyApp
