import './signIn.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface SignInProps {
    passLogin: (login:string) => void
}

const users = [{login: 'admin', password: 'admin'}, {login: 'ordinary man', password: '123456'}]

const SignIn: React.FC<SignInProps> = ({passLogin}) => {
    const [isLoginCorrect, setIsLoginCorrect] = useState(true);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
    const navigate = useNavigate();

    const loginUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            login: { value: string };
            password: { value: string };
        };

        const login = target.login.value;
        const password = target.password.value;

        passLogin(login)

        setIsLoginCorrect(false);

        if (users.find(user => user.login==login)) {
            setIsLoginCorrect(true);
            setIsPasswordCorrect(false);

            if (users.find(user => user.login==login && user.password==password)) {
                setIsPasswordCorrect(true);
                return navigate('user-board', { replace: false })
            }

            return
        }       
    }

    const signIn = (
        <div className='signIn'>   
            <p>Sign In</p>
            <form onSubmit={loginUser}>
                <input type="text" placeholder="Email/Name" name="login" />
                {!isLoginCorrect && <p className='error-message'>User do not exist</p>}
                <input type="text" placeholder="Password" name="password" />
                {!isPasswordCorrect && <p className='error-message'>Password is not correct</p>}
                <div className="signInControls">
                    <div className="goToSignUp">
                        <p>Need an account?</p>
                        <a href="">Sign Up</a>
                    </div>
                    <button type="submit">LOGIN</button>
                </div>
            </form>
        </div>
    )

    return signIn
}

export default SignIn