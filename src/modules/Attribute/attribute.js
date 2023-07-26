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
            <hr />
            <Row className='attribute-fill'>
                <Col md={1} className='attribute-label'>{t('attributes:strength')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="str" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>{t('attributes:charisma')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="cha" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>{t('attributes:intelligence')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="int" shape="circle" /></Col>
            </Row>
            <Row className='attribute-fill'>
                <Col md={1} className='attribute-label'>{t('attributes:dexterity')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="dex" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>{t('attributes:manipulation')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="man" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>{t('attributes:wits')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="wit" shape="circle" /></Col>
            </Row>
            <Row className='attribute-fill'>
                <Col md={1} className='attribute-label'>{t('attributes:stamina')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="sta" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>{t('attributes:composure')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="com" shape="circle" /></Col>

                <Col md={1} className='attribute-label'>{t('attributes:resolve')}</Col>
                <Col md={3} className='fill'><Fill type='attributes' traitId="res" shape="circle" /></Col>
            </Row>
            <hr />
            <Row className='attribute-text'>
                <Col md={6}>{t('labels:health')}</Col>
                <Col md={6}>{t('labels:willpower')}</Col>
            </Row>
            <Row>
                <Col md={6} className='fill fill-expendable'><Fill type='expendables' traitId='health' shape='square' /></Col>
                <Col md={6} className='fill fill-expendable'><Fill type='expendables' traitId='willpower' shape='square' /></Col>
            </Row>
            <Row>
                <Col md={1} />
                <Col md={5} className='crinos-text'><span>{t('labels:crinos')}</span><span className='wod crinos-health'>aaaa</span></Col>
            </Row>
        </Container>
    );
}

export default Attribute;
