import React from 'react';
import { useSelector} from "react-redux";
import SignIn from "./SignIn";
import SignUpPage from "./SignUpPage";
import LoggedUserPage from "./LoggedUserPage";

const MainPage = () => {
    const {isUserLogged, signUpClicked} = useSelector(state => state.mainPageInfo);

    return (
        <main className="main main-outer">
            <div className="main-inner container">
                <div className="main-app">
                    {
                        isUserLogged ?
                            <LoggedUserPage/> :
                            signUpClicked ?
                                <SignUpPage/> :
                                <SignIn/>
                    }
                </div>
            </div>
        </main>
    );
};

export default MainPage;