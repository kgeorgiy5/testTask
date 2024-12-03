import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    const path = useLocation().pathname;

    return(
        <header className="bg-zinc-300 sticky top-0 z-10 p-4">
            <nav className="flex flex-row bg-white p-2 rounded w-fit">
                <Link to="/" className={`${path === "/" ? "underline" : ""}`}>Product List</Link>
            </nav>
        </header>
    )
};

export default Navbar;