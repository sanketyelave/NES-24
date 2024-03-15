import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import AboutUs from "@/Components/AboutUs";
import Image from "next/image";
import Faq from "@/Components/Faq";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Faq />
    </main>
  );
}
