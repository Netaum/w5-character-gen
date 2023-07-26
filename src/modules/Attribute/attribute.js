import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fill from '../Fill/fill';
import './attribute.css';

function Attribute() {
    const { t } = useTranslation();

    return (
        <Container className='inner-frame'>
            <Row className='attribute-text'>
                <Col md={4}>{t('labels:physical')}</Col>
                <Col md={4}>{t('labels:social')}</Col>
                <Col md={4}>{t('labels:mental')}</Col>
            </Row>
            <Row />
            <Row className='attribute-fill'>
                <Col md={1} className='attribute-label'>Strength</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="str" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>Charisma</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="cha" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>Intelligence</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="int" shape="circle" /></Col>
            </Row>
            <Row className='attribute-fill'>
                <Col md={1} className='attribute-label'>Dexterity</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="dex" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>Manipulation</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="man" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>Wits</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="wit" shape="circle" /></Col>
            </Row>
            <Row className='attribute-fill'>
                <Col md={1} className='attribute-label'>Stamina</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="sta" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>Composure</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="com" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>Resolve</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="res" shape="circle" /></Col>
            </Row>
            <Row>
                <Col><Fill type='expendables' traitId='health' shape='square' /></Col>
            </Row>
        </Container>
    );
}

export default Attribute;
