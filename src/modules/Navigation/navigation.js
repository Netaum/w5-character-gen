import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../Header/header';
import './navigation.css';

function Navigation() {
    return (
        <Tabs defaultActiveKey='header'
            id='navigation-tab-id'
            className='navbar-custom'
            justify>
            <Tab eventKey="header" title="Header" className='frame'>
                <Header />
            </Tab>
            <Tab eventKey="attributes" title="Attributes">
                <h1>NOP</h1>
            </Tab>
            <Tab eventKey="skills" title="Skills">
                <h1>NOP</h1>
            </Tab>
            <Tab eventKey="powers" title="Powers">
                <h1>NOP</h1>
            </Tab>
        </Tabs>
    );
}

export default Navigation;