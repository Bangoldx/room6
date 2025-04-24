import { Link } from "react-router-dom";
import Hero from "./Hero";

const Landing = () => {

    return (
        <>
            <div class="hero-image">
                <div class="hero-text">
                    <Hero />
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

        </>
    );
}

export default Landing;