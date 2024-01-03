import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import '../app/globals.css'
import Footer from "./Footer";

const inter = Inter({ subsets: ['latin'] })


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={inter.className}>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;



