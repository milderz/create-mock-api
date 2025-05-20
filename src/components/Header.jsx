import Button from './Button';
import './styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFloppyDisk, faTableColumns, faRightToBracket, faShareNodes } from "@fortawesome/free-solid-svg-icons"

const Header = ({ currentPath, handleModalClose }) => {

    

    return (
        
            <header className="header" style={{ width: '90%', margin: 'auto' }}>
                <div className="logo">
                    <h1>MockAPI Playground</h1>
                </div>
                <nav className="nav">
                    {currentPath === "/create" ? (<Button type="secondary" text="My APIs" icon={<FontAwesomeIcon icon={faShareNodes} />} />) : null}
                    {currentPath === "/create" ? (<Button type="secondary" text="Save API" icon={<FontAwesomeIcon icon={faFloppyDisk} />} />) : null}
                    {currentPath === "/create" ? (<Button type="secondary" text="Select a template" icon={<FontAwesomeIcon icon={faTableColumns} />} onClick={handleModalClose}/>) : null}

                    <Button type="primary" text="Sign in" icon={<FontAwesomeIcon icon={faRightToBracket} />}/>
                </nav>
            </header>
        

          
      

    );
};

export default Header;