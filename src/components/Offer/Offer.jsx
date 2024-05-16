import { theme } from '../../theme';
import { Button } from '../common/Button';
import './Offer.scss';


const Offer = ({ title, description, bg }) => {
    const offerBg = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${bg}) center/cover no-repeat`;
    
    return (
        <div className='offer' style={{ background: `${offerBg}` }}>
            <h3 className='offer__title'>{title}</h3>
            <p className='offer__description'>{description}</p>
           <Button color={theme.accent_primary} />
        </div>
    )
}

export {
    Offer
}