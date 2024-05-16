import { theme } from '../../../theme';
import './Button.scss';

const Button = ({ path = 'https://www.virgingalactic.com/', text = 'Learn more', bg, color}) => {
const buttonStyle = {
    background: bg || 'transparent',    
    border: color ? `2px solid ${color}` : 'none'
}

const linkStyle = {
    color: color || `${theme.main}`
}
    return (
        <button className='button' style={buttonStyle}>
            <a href={path} className='button__link' style={linkStyle}>{text}</a>
        </button>
    )
}

export {
    Button
}