import { useNavigate } from 'react-router-dom';
import React, {useState} from "react";
import '../../style/Entrance.css';
import axios from 'axios';

interface FormData {
    username: string;
    email?: string;
    password: string;
    passwordConfirmation?: string;
}

const Entrance: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
    });
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [containerClass, setContainerClass] = useState('container');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(
                isSigningUp
                    ? 'http://localhost:8080/chessland/account/registration'
                    : 'http://localhost:8080/chessland/account/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                localStorage.setItem('jwtToken', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                navigate("/");
            } else {
                const errorData = await response.text();
                setErrorMessage(errorData || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    const handleTogglePanel = () => {
        setIsSigningUp((prevState) => !prevState);
        setContainerClass((prevClass) =>
            prevClass === 'container'
                ? 'container right-panel-active'
                : 'container'
        );
    };

    return (
        <div className="entrance-page">{errorMessage && <div className="error-message">{errorMessage}</div>}
            <b className="entrance-b">Chessland</b>
            <div className={containerClass} id="container">

                <div className="form-container sign-up-container">
                    <form className="entrance-form" onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                    }}>
                        <h1 className="entrance-h1">Create Account</h1>
                        <input className="entrance-input" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange}/>
                        <input className="entrance-input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                        <input className="entrance-input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}/>
                        <input className="entrance-input" type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={formData.passwordConfirmation} onChange={handleInputChange}/>
                        <button className="entrance-button" type="submit">Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form className="entrance-form" onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(e);
                    }}>
                        <h1 className="entrance-h1">Sign in</h1>
                        <input className="entrance-input" type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange}/>
                        <input className="entrance-input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}/>
                        <button className="entrance-button" type="submit">Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="entrance-h1">Welcome Back to Chessland!</h1>
                            <p className="entrance-p">We are glad to see you again on our chess platform.</p>
                            <button className="ghost" id="signIn" onClick={handleTogglePanel}>
                                Sign In
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="entrance-h1">Hello, Friend!</h1>
                            <p className="entrance-p">Register if you don't have an account yet and start playing chess!</p>
                            <button className="ghost" id="signUp" onClick={handleTogglePanel}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </ div>
    );
}

export default Entrance;