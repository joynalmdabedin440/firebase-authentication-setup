import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase.init";



const Register = () => {

    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const { createUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value
        const displayName = e.target.name.value
        console.log(displayName);

        
        
        
        
        setError(null)
        setSuccess(false)
        createUser(email, password)
            .then(() => {
                setSuccess(true)
                e.target.reset()
                navigate("/orders")
            }


            )

            .catch(error => {
                setError(error.message)

            })
        
        
        updateProfile(auth.currentUser, {
            displayName
        })
            .then((res) => {
            console.log(res);
            
            })
            .catch(error => {
            console.log(error.message);
            
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register Now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" className="input" placeholder="Name" name="name" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                            <div> Already have account?<Link to="/login">Login </Link></div>
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                    <div className="text-center pb-2">
                        <p className="text-red-500 p-">
                            {
                                error ? error : ""
                            }
                        </p>

                        <p className="text-green-400">
                            {
                                success ? "Successfully Register" : ""
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;