import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";


export default function Footer() {
    return (
        <footer className="flex justify-center items-center py-4 font-primary text-gray-700">
            Built With
            <FontAwesomeIcon icon={faHeart} className="text-red-500 mx-1 animate-pulse" />
            by
            <a href="https://eazybytes.com" 
            target="_blank" rel ="noreferrer" 
            className="text-primary font-semibold px-1 transition-colors duration-300 hover:text-dark">
            EasyBytes
            </a>
        </footer>
    );
}

//target ="_blank " is used to open the link in a new tab. This is a common practice for external links to ensure that users don't navigate away from your site.