import { Button } from "../../components/common/Button";
import { Menu } from "../../components/Menu";
import { theme } from "../../theme";
import './Header.scss';

const Header = () => {
    return (
        <header style={{ minHeight: '100vh' }}>
            <Menu />
            <div className='welcomeContainer'>
                <h1 className='welcomeContainer__title'>Discover the vast expanses of <span className="welcomeContainer__title_highlighted_pink">space</span></h1>
                <p className='welcomeContainer__description'>Where the possibilities are <span className="welcomeContainer__title_highlighted_yellow">endless!</span></p>
                <Button bg={theme.accent_primary} />
            </div>
        </header>
    )
}

export {
    Header
}