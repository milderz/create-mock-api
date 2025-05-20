import Button from './Button';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faTableColumns, faRightToBracket, faShareNodes } from "@fortawesome/free-solid-svg-icons"
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";

const Header = ({ currentPath, handleModalClose }) => {

    const PUBLISHABLE_KEY = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY



    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <header className="header" style={{ width: '90%', margin: 'auto' }}>
                <div className="logo">
                    <a className='logo-title' href="/">MockAPI Playground</a>
                </div>
                <nav className="nav">
                    {currentPath === "/create" ? (<Button type="button" buttonStyle="secondary" text="My APIs" icon={<FontAwesomeIcon icon={faShareNodes} />} />) : null}
                    {currentPath === "/create" ? (<Button type="button" buttonStyle="secondary" text="Save API" icon={<FontAwesomeIcon icon={faFloppyDisk} />} />) : null}
                    {currentPath === "/create" ? (<Button type="button" buttonStyle="secondary" text="Select a template" icon={<FontAwesomeIcon icon={faTableColumns} />} onClick={handleModalClose} />) : null}

                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                    <Button type="link" buttonStyle="primary" text="Sign In" linkTarget="/create" icon={<FontAwesomeIcon icon={faRightToBracket} />} onClick={handleModalClose} />
                    </SignedOut>
                </nav>
            </header>
        </ClerkProvider>
    );
};

export default Header;