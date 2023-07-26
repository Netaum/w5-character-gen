import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../Header/header';
import Attribute from '../Attribute/attribute';
import Skill from '../Skill/skill';
import { useTranslation } from 'react-i18next';
import './navigation.css';

function Navigation() {
    const { t } = useTranslation();
    return (
        <Tabs defaultActiveKey='charInfo'
            id='navigation-tab-id'
            className='navbar-custom'
            justify>
            <Tab eventKey="charInfo" title={t('labels:charInfo')} className='frame'>
                <Header />
            </Tab>
            <Tab eventKey="attributes" title={t('labels:attributes')} className='frame'>
                <Attribute />
            </Tab>
            <Tab eventKey="skills" title={t('labels:skills')} className='frame'>
                <Skill />
            </Tab>
            <Tab eventKey="powers" title={t('labels:powers')} className='frame'>
                <h1>NOP</h1>
            </Tab>
        </Tabs>
    );
}

export default Navigation;