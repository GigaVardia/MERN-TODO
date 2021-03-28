import React, {FC} from 'react';
import {useTypedSelector} from "../Hooks/useTypedSelector";
import SignIn from "./SignIn";
import SignUpPage from "./SignUpPage";
import LoggedUserPage from "./LoggedUserPage";

const MainPage: FC = () => {
    const {isUserLogged, signUpClicked} = useTypedSelector(state => state.mainPageInfo)

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