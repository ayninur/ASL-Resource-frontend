import React from 'react'
import { GlobalCtx } from "../../../App"


const Login = (props) => {
    const { gState, setgState } = React.useContext(GlobalCtx)
    const { url } = gState

    const blank = {
        username: "",
        password: ""
    }
    const [form, setForm] = React.useState(blank)


    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = form;
        fetch(`${url}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(data => {
                window.localStorage.setItem("token", JSON.stringify(data))
                setgState({ ...gState, token: data.token, user: data.username })
                setForm(blank)
                props.history.push("/profile/learningpath")
            })

    }


    return (
        <div className="form-container">


            <div className="form-content-right">
                <form className="form" onSubmit={handleSubmit}>
                    <div id="login-icon">
                        <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" className="usericon" />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="username" className="form-label">
                            Username:
            </label>
                        <input
                            id="username"
                            type="text"
                            name='username'
                            className='form-input'
                            placeholder="Enter your username"
                            value={form.username}
                            onChange={handleChange} />

                    </div>

                    <div className="form-inputs">
                        <label htmlFor="password"
                            className="form-label">
                            Password:
            </label>
                        <input id="password"
                            type="password"
                            name='password'
                            className='form-input'
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange} />
                    </div>
                    <button
                        className="form-input-btn"
                        type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Login


