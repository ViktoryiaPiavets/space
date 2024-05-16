import rocketImage from './../../images/rocket.svg';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={rocketImage} alt='rocket'/>
            <p>Exciting space adventure!</p>
        </footer>
    )
}

export {
    Footer
}