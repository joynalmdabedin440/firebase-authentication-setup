

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email,password);
        


    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                   
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input  type="email" className="input" placeholder="Email" name="email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" name="password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;