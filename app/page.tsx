"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Vehicles from "@/components/vehicles"
import BookingForm from "@/components/booking-form"
import About from "@/components/about"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Vehicles />
      <BookingForm />
      <About />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
