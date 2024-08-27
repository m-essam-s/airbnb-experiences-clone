import Logo from '/assets/icons/airbnb.png';

const AirBnBLogo = () => <img src={Logo} alt="AirBnB Logo" className="nav--logo"/>

const NavBar = () => {
    return (
        <nav>
            <AirBnBLogo />
        </nav>
    );
}

export default NavBar;