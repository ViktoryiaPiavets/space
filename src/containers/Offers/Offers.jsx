import { Offer } from '../../components/Offer';
import './Offers.scss';
import firstBgImage from './../../images/offer1_bg.svg';
import secondBgImage from './../../images/offer2_bg.svg';
import thirdBgImage from './../../images/offer3_bg.svg';
import fourthBgImage from './../../images/offer4_bg.svg';

const Offers = () => {
    const firstOfferDescription = window.innerWidth > 768 ? `Go on a space adventure - it's possible with us!` : 'Go on a space adventure';
    const secondOfferDescription = window.innerWidth > 768 ? 'Go on a space adventure' : 'it is a majestic journey to';
    
    return (
        <main className='mainContainer'>
            <h2>Offers</h2>
            <section className='offers'>
                <div className='offers__item offers__item_size_large'>
                    <Offer 
                        title={'Move the borders of reality!'}
                        description={firstOfferDescription}
                        bg={firstBgImage}
                     />  
                </div>                              
                <div className='offers__item'>
                    <Offer 
                        title={'Space is not just stars and planets'}
                        description={secondOfferDescription}
                        bg={secondBgImage}
                    />    
                </div>
                <div className='offers__item'>
                    <Offer 
                        title={'For those who dream of stars '}
                        description={'Our offer: make your dream come true'}
                        bg={thirdBgImage}
                    />  
                </div>
                <div className='offers__item offers__item_size_large'>
                <Offer 
                    title={'Fulfill your fantastic dreams'}
                    description={'Space has never been so close'}
                    bg={fourthBgImage}
                />   
                </div>
            </section>
            <section className='info'>
                <p className='info__title'>Embark on a space journey</p>
                <input type="checkbox" className="info__readMoreState" id="infoTrigger" />
                <p className='info__description'>
                    Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. 
                    And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. 
                    We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe.
                    <span className='info__description_collapsible'> We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. 
                    Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space.
                    We offer various options for space excursions.</span>                    
                </p>                
                <label htmlFor="infoTrigger" className="info__readMoreTrigger"></label>
            </section>            
        </main>
    )
}

export {
    Offers
}