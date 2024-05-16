import { useState, useEffect } from 'react';
import logoImage from './../../images/logo.svg';
import menuImage from './../../images/menu.svg';
import closeImage from './../../images/close_icon.svg';
import './Menu.scss';

const Menu = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
        {
          render: (
            <button></button>
          )          
        },
      ];
    
    const renderMenuItems = () => menuItems.map((item, index) => (
        <li key={index} className='menu__item'>
            {item.name ? <a href={item.link}>{item.name}</a> : item.render}
        </li>
    ))
    
    const handleResize = () => {
        const isMobile = window.innerWidth <= 360;        
        if (!isMobile) {
          setIsMenuOpened(false);
        }
      };
 
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
    return (
        <nav className='navigation'>         
          <img src={logoImage} alt='logo' className='navigation__logo' />                 
          <ul className='navigation__menu menuDesktop'>{renderMenuItems()}</ul>
          <button className='navigation__menuTrigger' onClick={() => setIsMenuOpened((prevOpened) => !prevOpened)}>
              <img src={isMenuOpened ? closeImage : menuImage} alt='icon to open or close menu'/>
          </button>
          {
            isMenuOpened && 
            <ul className='navigation__menu menuMobile'>{renderMenuItems()}</ul>
          }           
        </nav>
    )
}

export {
    Menu
}