import './App.css';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import LoginComponent from "./pages/login/login.tsx";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [navState, setNavState] = useState(false);

    const openNav = () => {
        setNavState(prev => !prev);
    };

    const handleLogin = () => {
        setAuthenticated(true);
    };

    const handleLogout = () => {
        setAuthenticated(false);
        setNavState(false);
    };

    if (!authenticated) {
        return <LoginComponent onLogin={handleLogin} />;
    }

    return (
        <div>
            <header className="header">
                <div><h2>FinTracker</h2></div>
                <div className="align-center">
                    Michael Jackson &nbsp;
                    <div>
                        {navState ? (
                            <CloseIcon onClick={openNav} />
                        ) : (
                            <MenuIcon onClick={openNav} />
                        )}
                    </div>
                </div>
            </header>

            <div>
                {navState ? (
                    <div className="nav">
                        <div className="nav-item grid-two-reverse">
                            <div className="w-100 items-center"><HomeIcon />&nbsp;&nbsp;Home</div>
                            <div><ChevronRightIcon /></div>
                        </div>
                        <div className="nav-item grid-two-reverse">
                            <div className="w-100 items-center"><PersonIcon />&nbsp;&nbsp;Profile</div>
                            <div><ChevronRightIcon /></div>
                        </div>
                        <div className="nav-item grid-two-reverse">
                            <div className="w-100 items-center"><AccountBalanceWalletIcon />&nbsp;&nbsp;Wallet</div>
                            <div><ChevronRightIcon /></div>
                        </div>
                        <div className="nav-item grid-two-reverse">
                            <div className="w-100 items-center"><SettingsIcon />&nbsp;&nbsp;Settings</div>
                            <div><ChevronRightIcon /></div>
                        </div>
                        <div className="nav-item grid-two-reverse">
                            <div className="w-100 items-center"><LiveHelpRoundedIcon />&nbsp;&nbsp;FAQ</div>
                            <div><ChevronRightIcon /></div>
                        </div>
                        <div className="nav-item bottom w-100">
                            <button className="w-100 align-center logout" onClick={handleLogout}>
                                <LogoutIcon />&nbsp;&nbsp;Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="main">
                        <div className="w-100 align-center hero">
                            <div className="grid-two w-100">
                                <div className="block"></div>
                                <div className="block"></div>
                            </div>
                        </div>

                        <div className="margin-top">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div className="grid-two-auto" key={i}>
                                    <div className="grid-two-reverse">
                                        {/*<div className="icon"></div>*/}
                                        <div>Item</div>
                                    </div>
                                    <div>R200.00</div>
                                </div>
                            ))}
                        </div>

                        <button className="w-100 margin-btm bottom">Add Item</button>

                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
