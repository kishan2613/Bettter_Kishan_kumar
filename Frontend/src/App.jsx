import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/home";
import BookingForm from "./pages/BookingForm";
import Booking from "./pages/Booking";
import About from "./pages/about";
import Contact from "./pages/contact";


function App() {

  return (
    <div className="flex flex-col min-h-screen">
    <Router>
      <Navbar />
      <main className="flex-grow">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/slots" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer id="footer"/>
    </Router>
    </div>
  )
}

export default App
