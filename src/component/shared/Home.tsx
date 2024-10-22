import { Link, useNavigate } from 'react-router-dom';
import '../../style/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <b className="home-b">Chessland</b>

            <header className="navbar">
                <nav>
                    <ul>
                        <li><Link to="/play">Play</Link></li>
                        <li><Link to="/translations">Translations</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/forum">Forum</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/messages">Messages</Link></li>
                    </ul>
                </nav>
            </header>

            <div className="avatar-container">
                <img src="default-user-icon.png" alt="User Avatar" className="avatar" />
            </div>

            <button className="get-started-button" onClick={() => navigate("/entrance")}>
                Get Started
            </button>
        </div>
    );
};

export default Home;

