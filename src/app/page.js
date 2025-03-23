import Image from "next/image";
import "./page.css";
import Header from "../components/Header.jsx";
import ContactPage from "./contact/page.jsx";

export default function Home() {
  return (
    <>
   <Header/>
   <main className="homePage">
    <a href="/contact" className="contactBtn">Contact Us</a>
   </main>
   </>
  );
}
