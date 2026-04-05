import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";


export default function Footer() {
    return (
        <footer className="footer">
            Built With
            <FontAwesomeIcon icon={faHeart} className="footer-icon" />
            by
            <a href="https://eazybytes.com" target="_blank" rel ="noreferrer">
            EasyBytes
            </a>
        </footer>
    );
}

//target ="_blank " is used to open the link in a new tab. This is a common practice for external links to ensure that users don't navigate away from your site.