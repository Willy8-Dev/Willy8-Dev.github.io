import React from "react"
import Navigation from "./Navigation"
import Header from "./Header"
import Cards from "./Cards"
import Slide from "./Slide"
import Footer from "./Footer"

export default function Layout(props) {
  return (
    <div>
      <Navigation site={["Home", "Features", "About"]} />
      {/* <Header heading={props.heading} /> */}
      <Slide />
      {/* <Cards /> */}
      {props.children}
      <Footer />
    </div>
  )
}
