const NavBar = () => {
    return (
        <div className="nav-bar__container">
            <div className="nav-bar__logo__container">
                <a href="/">
                    <img
                        className="nav-bar__logo__img"
                        src="./logo.png"
                        alt="logo"
                    />
                </a>
            </div>
            <div className="nav-bar__menu">
                <div className="nav-bar__menu-item">
                    <a href="/signUp">sign up</a>
                </div>
                <div className="nav-bar__menu-item">
                    <a href="/signIn">sign in</a>
                </div>
                <div className="nav-bar__menu-item">
                    <a href="/about">About</a>
                </div>
            </div>
            <style jsx>{`
                .nav-bar__container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 20px;
                    height: 80px;
                    background-color: #ffffff;
                    border-bottom: 1px solid #eaeaea;
                }
                .nav-bar__logo__container {
                    width: 70px;
                    height: 70px;
                }
                .nav-bar__logo__img {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                }
                .nav-bar__logo__text {
                    margin: 0;
                    font-size: 20px;
                    font-weight: 700;
                    color: #000000;
                }
                .nav-bar__menu {
                    display: flex;
                    align-items: center;
                }
                .nav-bar__menu-item {
                    margin-left: 20px;
                }
                .nav-bar__menu-item a {
                    text-decoration: none;
                    color: #000000;
                }
            `}</style>
        </div>
    );
};

export default NavBar;
