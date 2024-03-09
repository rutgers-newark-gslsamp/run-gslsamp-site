'use client'
import Header from "../../src/components/Header"
import TextInput from "../../src/components/TextInput";
import FormButton from "../../src/components/FormButton";
import "../styles/cms-globals.css"

export default function Login() {

  const handleLogin = (e) => {
    e.preventDefault();

    const enteredUsername = e.target.username.value;
    const enteredPassword = e.target.password.value;

    // Check if the entered username and password match the values stored in the environment variables
    //if (enteredUsername === process.env.USERNAME && enteredPassword === process.env.PASSWORD) {
      if (enteredUsername === "webdev" && enteredPassword === "gslsamp123") {
      // Username and password are correct, navigate to the select-a-page
      window.location.href = "/content-management/select-a-page";
    } else {
      // Incorrect username or password
      console.log('Invalid username or password');
    }
  };

  return (
    <>
      <Header pageTitle="Login" back={true} />
      <main id="login-main">
        <form className="container" onSubmit={handleLogin}>
          <div className="center-divs">
            <div className="top-div">
              <TextInput label={"Username"} name={"username"} />
            </div>
            <div>
              <div className='cms-text-input'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
            </div>
          </div>

          <div id="login-button">
            <FormButton label={"Login"} />
          </div>
        </form>
      </main>
    </>
  );
}
