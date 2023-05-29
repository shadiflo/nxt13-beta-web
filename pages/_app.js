import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/sass/style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Navbar/>
      <Head>
        <title>TENARIS.</title>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
