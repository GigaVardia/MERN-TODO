import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useHttp} from "../Hooks/http.hook";
import {useTypedSelector} from "../Hooks/useTypedSelector";

const SignIn:FC = () => {
    const {request} = useHttp();
    const dispatch = useDispatch();
    const loginState = useTypedSelector(state => state.userLogin)
    const {loginFailed} = useTypedSelector(state => state.mainPageInfo)

    const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "ADD_EMAIL", payload: event.target.value})
    }

    const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "ADD_PASSWORD", payload: event.target.value})
    }

    const handleSignInBtn =  async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (!loginState.email || !loginState.password) {
            dispatch({type: "SET_LOGIN_FAILED", payload: true})
            return -1
        }

        console.log(loginState)
        console.log(loginFailed)

        try {
            const data = await request('/api/auth/login', 'POST', {...loginState});
            const user = {
                name: data.payload.name,
                surname: data.payload.surname,
                email: data.payload.email,
                data: data.payload.data,
                id: data.payload._id
            }
            dispatch({type: "ADD_NEW_USER_DATA", payload: {user}})
            dispatch({type: "SET_USER_LOGIN", payload: true})
            dispatch({type: "SET_LOGIN_FAILED", payload: false})
        } catch (e) {
            dispatch({type: "SET_LOGIN_FAILED", payload: true})
            console.log(e, "Error while login fetch...")
        }
    }

    const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch({type: "SET_SIGN_UP_CLICKED", payload: true})
    }

    useEffect(() => {
        if (loginFailed) {
            document.querySelectorAll('.signIn-form-label-input')
                .forEach(item => item.classList.toggle('signIn-form-label-input--failed'));
        }
    }, [loginFailed])

    return (
        <div className="signIn signIn-outer">
            <div className="signIn-inner container">
                <form className="signIn-form">
                    <h1 className="signIn-form-title">
                        Welcome to React Todo App!
                    </h1>
                    <label className="signIn-form-label">
                        <input
                            className="signIn-form-label-input"
                            type="email"
                            placeholder="Email..."
                            value={loginState.email}
                            onChange={handleEmailInput}
                        />
                    </label>
                    <label className="signIn-form-label">
                        <input
                            className="signIn-form-label-input"
                            type="password"
                            placeholder="Password..."
                            value={loginState.password}
                            onChange={handlePasswordInput}
                        />
                    </label>
                    <button
                        className="signIn-form-btn"
                        onClick={handleSignInBtn}
                        type="submit"
                    >
                        Sign In
                    </button>
                    <button className="signIn-form-signUp" onClick={handleSignUp}>
                        You don't have an account? <span className="bolder">Sign Up!</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;