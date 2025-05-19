import Button from './Button';
import './styles/Header.css';



const Header = ({ currentPath, handleModalClose }) => {

    

    return (
        
            <header className="header" style={{ width: '90%', margin: 'auto' }}>
                <div className="logo">
                    <h1>MockAPI Playground</h1>
                </div>
                <nav className="nav">
                    {currentPath === "/create" ? (<Button type="secondary" text="Select a template" onClick={handleModalClose}/>) : null}

                    <Button type="primary" text="Sign in" />
                </nav>
            </header>
        

          
      

    );
};

export default Header;