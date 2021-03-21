import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addLoginEmail, addLoginPassword} from "../Store/userLoginReducers";
import {useHttp} from "../Hooks/http.hook";
import {
    setLoginFailedFalse,
    setLoginFailedTrue,
    setSignUpClickedTrue,
    setUserLoginActive
} from "../Store/mainPageReducer";
import {addNewUserData} from "../Store/userDataReducer";

const SignIn = () => {
    const {request} = useHttp();
    const dispatch = useDispatch();
    const loginState = useSelector(state => state.userLogin);
    const {loginFailed} = useSelector(state => state.mainPageInfo);

    const handleEmailInput = (event) => {
        dispatch(addLoginEmail(event.target.value));
    }

    const handlePasswordInput = (event) => {
        dispatch(addLoginPassword(event.target.value));
    }

    const handleSignInBtn =  async (event) => {
        event.preventDefault();

        if (!loginState.email || !loginState.password) {
            dispatch(setLoginFailedTrue())
            return -1
        }

        try {
            const data = await request('/api/auth/login', 'POST', {...loginState});
            const user = {
                name: data.payload.name,
                surname: data.payload.surname,
                email: data.payload.email,
                data: data.payload.data,
                id: data.payload._id
            }
            dispatch(addNewUserData(user))
            dispatch(setUserLoginActive())
            dispatch(setLoginFailedFalse())
        } catch (e) {
            dispatch(setLoginFailedTrue())
            console.log(e, "Error while login fetch...")
        }
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        dispatch(setSignUpClickedTrue())
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