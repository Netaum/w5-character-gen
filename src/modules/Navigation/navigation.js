import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './navigation.css';

function Navigation () {
    return (
        <Tabs defaultActiveKey='sheet' 
              id='navigation-tab-id'
              className='navbar-custom'
              justify>
            <Tab eventKey="header" title="Header">
                <div className='frame'>
                    <h1>header</h1>
                </div>
            </Tab>
            <Tab eventKey="attributes" title="Attributes">
                <h1>attributes</h1>
            </Tab>
            <Tab eventKey="skills" title="Skills">
                <h1>skills</h1>
            </Tab>
            <Tab eventKey="powers" title="Powers">
                <h1>powers</h1>
            </Tab>
        </Tabs>
    );
}

export default Navigation;