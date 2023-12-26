import {Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";



function App() {
  return <>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/bookList"}>BookList</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookList" element={<BookList />} />
        {/* NOTE => id is the variable that will be changed with every new book */}
        <Route path="/bookList/:id" element={<Book />} />
        <Route path="/bookList/newBook" element={<NewBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </>
}

export default App;
