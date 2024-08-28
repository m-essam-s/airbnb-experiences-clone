import Logo from '/images/airbnb-logo.png';

const AirBnBLogo = () => <img src={Logo} alt="AirBnB Logo" className="nav--logo logo"/>

const NavBar = () => {
    return (
        <nav>
            <AirBnBLogo />
        </nav>
    );
}

export default NavBar;