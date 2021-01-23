import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { GiWorld } from 'react-icons/gi'

function Header(props) {
    return (
        <header className={styles.Header}>
            <Link to="/">
                <GiWorld size="2.7em"GiWorld />
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
                        {/* TODO: <Link to="/search">Search</Link> 
                        <Form inline>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                            </Form>
                        */}
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