import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { GiWorld } from 'react-icons/gi';

function Header(props) {
    return (
        <header className={styles.Header}>
            <Link to="/">
                <GiWorld size="3em" />
                What In The World!?
            </Link>
            <nav>
                

                <ul>
                    {
                        props.user ? 
                <>   
                    <li>
                        <Link to="/login" onClick={props.handleLogout}>Logout</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                                
                    <li>
                          <Link to="/search">Search</Link> 
                        
                    </li>
                </>
                    :
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    
                    <li>
                        <Link to="/signup">Sign Up</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;