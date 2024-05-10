
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from './components/Header';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import PageNotFound from './PageNotFound';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
       <Routes>
         <Route  >
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<PageNotFound />} />
         </Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
