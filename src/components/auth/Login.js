import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Login.css"


export const Login = ({setAuthUser}) => {
    const email = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:5002/customers?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }
    const [stayLogged, setStayLogged] = useState(false);

    const handleChange = () => {
        setStayLogged(!stayLogged)
    }
    console.log("stay logged in",stayLogged);

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(stayLogged);

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    setAuthUser(exists)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    

    return (
      <main className="container--login">
        <dialog className="dialog dialog--auth" ref={existDialog}>
          <div>User does not exist</div>
          <button
            className="button--close"
            onClick={(e) => existDialog.current.close()}
          >
            Close
          </button>
        </dialog>

        <section>
          <form className="form--login" onSubmit={handleLogin}>
            <h1>Nashville Kennels</h1>
            <h2>Please sign in</h2>
            <fieldset>
              <label htmlFor="inputEmail"> Email address </label>
              <input
                ref={email}
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <label htmlFor="rememberLogin"> Stay logged in </label>
              <input
                type="checkbox"
                id="rememberLogin"
                name="rememberLogin"
                defaultChecked={stayLogged}
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <button type="submit">Sign in</button>
            </fieldset>
          </form>
        </section>
        <section className="link--register">
          <Link to="/register">Not a member yet?</Link>
        </section>
      </main>
    );
}

