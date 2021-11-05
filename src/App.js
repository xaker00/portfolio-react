import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container, Row, Col } from "react-materialize";

import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Portfolio } from "./components/portfolio";
import { Resume } from "./components/resume";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
      <Row>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
      </Row>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
