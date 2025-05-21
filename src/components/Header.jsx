import Button from './Button';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faTableColumns, faRightToBracket, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import {
    
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const Header = ({ currentPath, handleModalClose,handleTemplateSave, setUserID }) => {

    const { user } = useUser();
    setUserID(user?.id);
  console.log(user);



    return (
        
            <header className="header" style={{ width: '90%', margin: 'auto' }}>
                <div className="logo">
                    <a className='logo-title' href="/">API Sandbox</a>
                </div>
                <nav className="nav">
                    {currentPath === "/create" ? (<Button type="link" linkTarget="myapis" buttonStyle="secondary" text="My APIs" icon={<FontAwesomeIcon icon={faShareNodes} />} />) : null}
                    {currentPath === "/create" ? (<Button type="button" buttonStyle="secondary" text="Save API" icon={<FontAwesomeIcon icon={faFloppyDisk} />} onClick={handleTemplateSave}/>) : null}
                    {currentPath === "/create" ? (<Button type="button" buttonStyle="secondary" text="Select a template" icon={<FontAwesomeIcon icon={faTableColumns} />} onClick={handleModalClose} />) : null}

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                    <Button type="link" buttonStyle="primary" text="Sign In" linkTarget="/create" icon={<FontAwesomeIcon icon={faRightToBracket} />} onClick={handleModalClose} />
                    </SignedOut>
                </nav>
            </header>
        
    );
};

export default Header;