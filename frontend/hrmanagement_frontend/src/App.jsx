import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminHome from './pages/AdminHome.jsx'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/register.jsx'
import Login_page from './pages/Login_page.jsx'
import Hrhome from './pages/Hrhome.jsx'
import emphome from './pages/emphome.jsx'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login_page></Login_page>}></Route>
        <Route path="/hrhome" element={<Hrhome></Hrhome>}></Route>
        <Route path="/emphome" element={<emphome></emphome>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlogin" element={<AdminLogin ></AdminLogin> }></Route>
        <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
