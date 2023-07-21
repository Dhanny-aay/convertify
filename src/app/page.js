// import Image from 'next/image';
"use client"; // This is a client component 👈🏽
import Advert from './comps/advert';
import { ScrollProvider } from './comps/context';
import Features from './comps/feature';
import Footer from './comps/footer';
import Hero from './comps/hero';
import Works from './comps/works';

export default function Home() {
  return (
    <>
    <ScrollProvider>
      <Hero/>
      <Features/>
      <Works/>
      <Advert/>
      <Footer/>
    </ScrollProvider>
    </>
  )
}
