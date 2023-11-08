import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./elements/Header";
import NavBar from "./elements/NavBar";
import Section from "./elements/Section";
import Footer from "./elements/Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header/>
    <NavBar/>
    <Section/>
    <Footer/>
  </StrictMode>
);
