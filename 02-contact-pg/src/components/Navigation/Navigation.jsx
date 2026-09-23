import logo from "../../assets/logo.png";
import style from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={'${style.navigation} container'}>
            <div className="logo-img">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </nav>
    )
};

export default Navigation