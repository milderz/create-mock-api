import './styles/Button.css';

const Button = ({type, text, onClick}) => {
    return (<button className={ type === "primary" ? "primary-button" : "secondary-button" } onClick={onClick}>{text}</button>)
}

export default Button;
