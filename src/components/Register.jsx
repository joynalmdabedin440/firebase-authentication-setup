import { Link } from "react-router";


const Register = () => {

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(e.target.email.value);
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register Now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit}  className="card-body">
                        <fieldset  className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" className="input" placeholder="Name" name="name" />
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" name="email"/>
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                            <div> Already have account?<Link to="/login">Login </Link></div>
                            <button type="submit" className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;