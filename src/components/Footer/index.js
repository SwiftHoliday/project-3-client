import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(props) {
    return (
        <footer className={styles.Footer}>

            <p>Copyright &copy; All Rights Reserved {new Date().getFullYear()} What In The World!?</p>
            
             
            <a href="https://github.com/SwiftHoliday" target="_blank" rel="noreferrer">
                <FaGithub size="2em" color="yellow" textDecoration="none"/>
            </a>

            <a href="https://www.linkedin.com/in/jonathyncarter/" target="_blank" rel="noreferrer">
                <FaLinkedin size="2em" color="dodgerblue" />
            </a>
        

        </footer>
    );
};

export default Footer;