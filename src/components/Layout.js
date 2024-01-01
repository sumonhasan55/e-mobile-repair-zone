/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
// components/Layout.js

import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className={inter.className}>{children}</main>
      {/* Add any other common components or layout elements here */}
    </div>
  );
};

export default Layout;



