import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Fill from '../Fill/fill';
import './skill.css';

function Skill() {
    const { t } = useTranslation();

    return (
        <Container className='inner-frame'>
            <Row className='skill-text'>
                <Col md={4}>{t('labels:physical')}</Col>
                <Col md={4}>{t('labels:social')}</Col>
                <Col md={4}>{t('labels:mental')}</Col>
            </Row>
            <hr />
            <Row className='skill-fill'>
                <Col md={1} className='skill-label'>Strength</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="str" shape="circle" /></Col>

                <Col md={1} className='skill-label'>Charisma</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="cha" shape="circle" /></Col>

                <Col md={1} className='skill-label'>Intelligence</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="int" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={1} className='skill-label'>Dexterity</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="dex" shape="circle" /></Col>

                <Col md={1} className='skill-label'>Manipulation</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="man" shape="circle" /></Col>

                <Col md={1} className='skill-label'>Wits</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="wit" shape="circle" /></Col>
            </Row>
            <Row className='skill-fill'>
                <Col md={1} className='skill-label'>Stamina</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="sta" shape="circle" /></Col>

                <Col md={1} className='skill-label'>Composure</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="com" shape="circle" /></Col>

                <Col md={1} className='skill-label'>Resolve</Col>
                <Col md={3} className='fill'><Fill type='skills' traitId="res" shape="circle" /></Col>
            </Row>
        </Container>
    );
}

export default Skill;

