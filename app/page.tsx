import { Blog } from "@/components/blog";
import { ClientLogos } from "@/components/clientlogos";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";


// https://www.twblocks.com/

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Stats/>
    <Pricing/>
    <ClientLogos/>
    <Testimonials/>
    <Blog/>
    <Contact/>
    <FAQ/>
    <Footer/>
    </>
  );
}
