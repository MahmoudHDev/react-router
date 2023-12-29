import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BookList from './pages/BookList';
import Book from './pages/Book';
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BooksLayout from "./pages/BooksLayout";



function App() {
  return <>
    {/* Fixed */}
    <nav>
      <ul className="nav-ul">
        <li className="nav-bar-li"><Link to={"/"}>Home</Link></li>
        <li className="nav-bar-li"><Link to={"/contact"}>Contact</Link></li>
        <li className="nav-bar-li"><Link to={"/bookList"}>BookList</Link></li>
        <li className="nav-bar-li"><Link to={"/about"}>About</Link></li>

      </ul>
    </nav>
    {/* Rendering */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookList" element={<BooksLayout />}>
      {/* sub Route of the parent route which is the BookList Route */}
        {/*The original route defined by this method below:  */}
        <Route path=":id" element={<Book />} />
        <Route index element={<BookList/>} />
        <Route path="newBook" element={<NewBook />} />
      </Route>
      {/* NOTE => id is the variable that will be changed with every new book */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
}

export default App;
