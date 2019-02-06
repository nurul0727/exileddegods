
import '../../assets/styles/header.scss';
import Button from '../base_component/button.js';

const Header = () => {
    return (
        <header className="site-header">
            <div className="site-header-menu">
                <div className="wrapper">
                    <div className="fullscreen-site-header-menu">
                        <div className="menu-button">
                            <Button
                                type = "button"
                                cls="button site-menu"
                            ><i className="bi bi-list"></i><span>Menu</span></Button>
                        </div>
                    </div>
                    <div className="fullscreen-site-header-menu-body">
                        <div className="site-identity">
                            <p className="site-title"><a href="https://exileddegods.com/" rel="home">THE EXILED DEGODS</a></p>
                            <p className="site-description">The Original DeGods minted at launch</p>
                        </div>
                    </div>
                    <div className="fullscreen-site-header-search">
                        <Button
                            type = "button"
                            cls="button site-menu-search"
                        ><i className="bi bi-search"></i></Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;