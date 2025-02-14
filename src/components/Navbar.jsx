
import { Link } from "react-router";



const Navbar = () => {
    
   

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Firebase Auth</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    
                    <li>
                        <Link to="/login" className="btn btn-ghost">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="btn btn-ghost">Register</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;