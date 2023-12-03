import { Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Products from "./pages/products/Products.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Notfound from "./pages/notFound/Notfound.jsx";
import Registreer from "./pages/registreer/Registreer.jsx";
import Login from "./pages/login/Login.jsx";
function App() {

  return (
      <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/registreer" element={<Registreer/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="*" element={<Notfound/>}/>
          </Routes>
      </>
  )
}

export default App
