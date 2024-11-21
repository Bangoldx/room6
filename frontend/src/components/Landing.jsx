import { Link } from "react-router-dom";

const Landing = () => {

    return (
        <>
            <div>
                <h1>Welcome to Room 6</h1>
            </div>
            <div>
                <h3>A Place for Learning</h3>
            </div>
            <div>
                <form action="" method="post" id="login">
                    <div>
                        <label> UserName
                            <input type="text" name="username"  />
                        </label>
                    </div>
                    <div>
                        <label>Password
                            <input type="password"  />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Go!"  />
                    </div>
                    <Link to={"signup"}>Sign Up</Link>
                </form>
            </div>
        </>
    );
}

export default Landing;