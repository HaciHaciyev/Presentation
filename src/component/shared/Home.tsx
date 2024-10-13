import { Link } from 'react-router-dom';
import '../../style/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="navbar">
                <div className="logo">Chessland</div>
                <nav>
                    <ul>
                        <li><Link to="/play">Play</Link></li>
                        <li><Link to="/translations">Translations</Link></li>
                        <li><Link to="/pages">Pages</Link></li>
                        <li><Link to="/forum">Forum</Link></li>
                        <li><Link to="/history">History</Link></li>
                        <li><Link to="/mail">Mail</Link></li>
                    </ul>
                </nav>
            </header>

            <section className="content-section">
                <div className="text-content">
                    <h1>Welcome to Chessland</h1>
                    <p>
                        Chessland is a cutting-edge online platform tailored for chess enthusiasts and the vibrant chess community.
                        Whether you're a seasoned player or just starting your journey, Chessland offers a comprehensive suite of
                        features to enhance your chess experience.
                    </p>
                    <p>
                        Engage in thrilling online matches with players from around the globe, analyze your games with powerful tools,
                        and refine your strategies. Enjoy live broadcasts of exciting tournaments and matches, and immerse yourself in a
                        community where you can share insights, exchange experiences, and discuss the intricacies of the game.
                    </p>
                    <p>
                        At Chessland, we believe in fostering a love for chess, making it accessible and enjoyable for everyone.
                        Join us today and elevate your chess journey to new heights!
                    </p>
                    <button className="get-started-btn">
                        <Link to="/login">Get Started</Link>
                    </button>
                </div>
                <div className="image-content">
                    <img src="/public/images/home.png" alt="Chess pieces"/>
                </div>
            </section>
        </div>
    );
};

export default Home;

