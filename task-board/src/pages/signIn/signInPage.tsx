import SignIn from "../../components/signIn/signIn";
import './signInPage.css';

interface SignInPageProps {
    passLogin: (login:string) => void;
}

const SignInPage: React.FC<SignInPageProps> = ({passLogin}) => {
    const signInPage = (
        <div className="signInPage">
            <SignIn passLogin={passLogin} />
        </div>
    );

    return signInPage;
}

export default SignInPage;
