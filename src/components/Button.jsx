import './styles/Button.css';

const Button = ({buttonStyle, type, text, onClick, icon, linkTarget}) => {
    if(type === 'button'){
        return (
            <button className={ buttonStyle === "primary" ? "primary-button" : "secondary-button" } onClick={onClick}>{icon}{text}</button>
        )
    }if(type === 'link'){
        return (
            <a className={ buttonStyle === "primary" ? "primary-button" : "secondary-button" } href={linkTarget}>{icon}{text}</a>
        )
    }
    
}

export default Button;
