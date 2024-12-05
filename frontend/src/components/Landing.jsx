import { Link } from "react-router-dom";

const Landing = () => {

    return (
        <>
            <body id="landing">
<div id="top">
    {/* <!-- Nav Bar --> */}
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
        <a class="navbar-brand nav-item" href="#top">Room 6</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#signup">Sign up!</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
<div  class="hero-image">
        <div class="hero-text">
        <h1>Welcome to Room 6</h1>
        <h3>A Place for learning!</h3>
    </div>
    <div class="login">
        <form method="post">
            <div class="form-group">
                <div class="login-label">
                    <label for="username">Username</label>
                </div>
                <input id="username" class="form-control" th:field="${loginFormDTO.username}" />
                <p class="error" th:errors="${loginFormDTO.username}"></p>
            </div>
            <div class="form-group">
                <div class="login-label">
                    <label for="password">Password</label>
                </div>
                <input id="password" class="form-control" th:field="${loginFormDTO.password}" type="password"/>
                <p class="error" th:errors="${loginFormDTO.password}"></p>
            </div>
            <div class="form-group login-button">
                <input type="submit" value="Log In!" class="btn btn-success"/>
            </div>
        </form>
    </div>
</div>
<div id="about">
    <h4 id="intro">Introducing Room 6</h4>
    <p>
        Here at Room 6, we strive to make sure that anyone that needs help and get it in a safe, judgement free
        environment.
        Sign up as a student, someone that is looking to learn more about something on a deeper scale or to just get a
        little bit of help,
        or a tutor, someone that is ready to assist an eager learning with what ever they may need assistance with.
    </p>
    <p>
        We are currently offering your base educational studies such as: Math, Science, Language, History and Social
        Studies.
        This list will continue to grow as our student and tutor base grow. We are hoping to eventually offer assistance
        in
        all STEM categories, multiple language fields, world studies and anything else that our dedicated tutors are
        willing
        and able to help our learners out with.
    </p>
</div>
<div id="signup">
    <h4>Signing up is EASY!</h4>
    <p>
        Signing up is as easy and putting in a little bit of your information, choose your role, chose you subjects
        and you're set. <a href="signup" class="signup">Click here</a> to sign up today!
    </p>
</div>

<footer th:replace="~{fragments :: footer}"></footer>
</body>
        </>
    );
}

export default Landing;