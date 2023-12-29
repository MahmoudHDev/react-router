import { Link, Outlet } from "react-router-dom";

export default function BooksLayout() {
    return (<>
        <ul>
            <li><Link to="/bookList/1">Book1</Link></li>
            <li><Link to="/bookList/2">Book2</Link></li>
            <li><Link to="/bookList/3">Book3</Link></li>
            <li><Link to="/bookList/newBook">New Book</Link></li>
        </ul>
        <Outlet />
    </>)
}