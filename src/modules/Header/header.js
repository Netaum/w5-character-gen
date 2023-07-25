import { SheetContext } from '../Context/context';
import { useTranslation } from 'react-i18next';
import Input from '../Input/input';
import './header.css';

function Header() {
    const { t } = useTranslation();

    return (
        <div className='inner-frame'>
            <Input name={t('header:name')} size={200} />
        </div>
    );
}

export default Header;