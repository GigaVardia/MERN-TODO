import React, {useState, useEffect, FC} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../Hooks/useTypedSelector";
import {useHttp} from "../Hooks/http.hook";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const BackIco = <FontAwesomeIcon icon={faArrowLeft} />

const SignUpPage: FC = () => {
    const {request} = useHttp();
    const dispatch = useDispatch();
    const userState = useTypedSelector(state => state.userRegister)
    const [registerFailed, setRegisterFailed] = useState(false);

    useEffect(() => {
        if (registerFailed) {
            document.querySelectorAll('.signUp-form-label-input')
                .forEach(item => item.classList.toggle('signUp-form-label-input--failed'));
        }
    }, [registerFailed])

    const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "ADD_NAME", payload: event.target.value})
    }

    const handleSurnameInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "ADD_SURNAME", payload: event.target.value})
    }

    const handleLoginInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "ADD_EMAIL", payload: event.target.value})
    }

    const handlePasswordInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "ADD_PASSWORD", payload: event.target.value})
    }

    const handleRegisterSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (!userState.name || !userState.surname || !userState.email || !userState.password) {
            setRegisterFailed(true);
            return
        }

        try {
            const data = await request('/api/auth/register', 'POST', {...userState});
            console.log(data);
            dispatch({type: "SET_SIGNED_UP_CLICKED", payload: false})
        } catch (e) {
            setRegisterFailed(true);
            console.log(e, "Error, while register fetch...");
        }
    }

    const handleBackToMainPage = () => {
        dispatch({type: "SET_SIGN_UP_CLICKED", payload: false})
    }

    return (
        <div className="singUp signUp-outer">
            <div className="signUp-inner container">
                <div className="signUp-backToMainPage" onClick={handleBackToMainPage}>
                    {BackIco}
                </div>
                <form className="signUp-form">
                    <h1 className="signUp-form-title">
                        Create Account
                    </h1>
                    <label className="signUp-form-label">
                        <input
                            className="signUp-form-label-input"
                            id="nameInput"
                            type="text"
                            placeholder="Name..."
                            value={userState.name}
                            onChange={handleNameInput}
                        />
                    </label>
                    <label className="signUp-form-label">
                        <input
                            className="signUp-form-label-input"
                            id="surnameInput"
                            type="text"
                            placeholder="Surname..."
                            value={userState.surname}
                            onChange={handleSurnameInput}
                        />
                    </label>
                    <label className="signUp-form-label">
                        <input
                            className="signUp-form-label-input"
                            id="emailInput"
                            type="email"
                            placeholder="Email..."
                            value={userState.email}
                            onChange={handleLoginInput}
                        />
                    </label>
                    <label className="signUp-form-label">
                        <input
                            className="signUp-form-label-input"
                            id="passwordInput"
                            type="password"
                            placeholder="Password..."
                            value={userState.password}
                            onChange={handlePasswordInput}
                        />
                    </label>
                    <button
                        onClick={handleRegisterSubmit}
                        className="signUp-form-btn"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;