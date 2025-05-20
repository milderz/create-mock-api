import './styles/Button.css';

const Button = ({type, text, onClick, icon}) => {
    return (<button className={ type === "primary" ? "primary-button" : "secondary-button" } onClick={onClick}>{icon}{text}</button>)
}

export default Button;
