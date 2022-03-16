import "./SignIn.css"

export default function SignIn() {
    return (
        <div className="signIn-page">
            <header className="signIn-header">
                <h1>Cramazon</h1>
            </header>

            <div className="signIn-box">
                <h1>Sign-In</h1>
                <form className="signIn-form" id="signInForm">
                    <label className="signIn-email-label" htmlFor="email">Email</label>
                    <input type="email" className="signIn-email-input" name="email"></input>
                    <label className="signIn-password-label" htmlFor="password">Password</label>
                    <input type="password" className="signIn-password-input" name="password"></input>
                    <button className="signIn-button" type="submit" form="signInForm" >Sign In</button>
                </form>
            </div>
            <div className="brake">
                <h5>New to Cramazon?</h5>
            </div>
            <div>
                <button className="signUp-button" >Create your Cramazon account</button>
            </div>
        </div>
    )
}