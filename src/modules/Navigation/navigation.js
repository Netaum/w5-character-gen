import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '../Header/header';
import './navigation.css';

function Navigation() {
    return (
        <Tabs defaultActiveKey='sheet'
            id='navigation-tab-id'
            className='navbar-custom'
            justify>
            <Tab eventKey="header" title="Header">
                <div className='frame'>
                    <Header />
                </div>
            </Tab>
            <Tab eventKey="attributes" title="Attributes">
                <div className='frame'>
                    <h1>NOP</h1>
                </div>
            </Tab>
            <Tab eventKey="skills" title="Skills">
                <div className='frame'>
                    <h1>NOP</h1>
                </div>
            </Tab>
            <Tab eventKey="powers" title="Powers">
                <div className='frame'>
                    <h1>NOP</h1>
                </div>
            </Tab>
        </Tabs>
    );
}

export default Navigation;