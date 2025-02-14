
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../providers/AuthProvider";



const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext)


    const handleLogOutUser = () => {
        logOutUser()
            .then(() => {
                console.log('logout success');

            })
            .catch(error => {
                console.log(error.message);

            })
    }







    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Firebase Auth</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 ">

                    {
                        user && <li>
                            <Link to="/orders" className="btn btn-ghost">Orders</Link>
                        </li>
                    }




                    <li>
                        {
                            user ?

                                <div>
                                    <p>
                                        {user.email}
                                    </p>
                                    <button onClick={handleLogOutUser} className="btn btn-ghost">Logout</button>

                                </div>



                                : <div>
                                    <Link to="/login" className="btn btn-ghost">Login</Link>
                                    <Link to="/register" className="btn btn-ghost">Register</Link>
                                </div>
                        }
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;