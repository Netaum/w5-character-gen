import { SheetContext } from '../Context/context';
import { useTranslation } from 'react-i18next';

export default function Sheet() {

    const { t } = useTranslation();

    return (
        <SheetContext.Consumer>
           {(state) =>
           <div>
                <h1>{state.name} 1</h1>
                <h1>{t('ability:strength')}</h1>
                <button onClick={() => state.updateName(state)}>UPDATE</button>
           </div>
           }
        </SheetContext.Consumer>
    );
}